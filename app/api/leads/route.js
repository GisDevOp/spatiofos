import {
  formatLeadEmail,
  leadSubject,
  validateLeadPayload,
} from "@/lib/leads";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 8;
const hits = new Map();

function rateLimit(ip) {
  const now = Date.now();
  const key = ip || "unknown";
  const entry = hits.get(key) || { count: 0, reset: now + RATE_LIMIT_WINDOW_MS };
  if (now > entry.reset) {
    entry.count = 0;
    entry.reset = now + RATE_LIMIT_WINDOW_MS;
  }
  entry.count += 1;
  hits.set(key, entry);
  return entry.count <= RATE_LIMIT_MAX;
}

async function sendViaResend({ to, subject, text, replyTo }) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM || "SpatioFos <onboarding@resend.dev>";

  if (!apiKey) {
    return { sent: false, reason: "RESEND_API_KEY not configured" };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
      reply_to: replyTo,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("Resend error:", err);
    return { sent: false, reason: "Email delivery failed" };
  }

  return { sent: true };
}

function destinationForType(type) {
  const map = {
    "roof-score": process.env.LEADS_EMAIL_HELLO || "hello@spatiofos.com",
    "sample-report": process.env.LEADS_EMAIL_HELLO || "hello@spatiofos.com",
    contact: process.env.LEADS_EMAIL_BOOKINGS || "bookings@spatiofos.com",
  };
  return map[type];
}

export async function POST(request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip)) {
    return Response.json(
      { ok: false, error: "Too many requests. Please try again shortly." },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid JSON." }, { status: 400 });
  }

  const validation = validateLeadPayload(body);
  if (!validation.ok) {
    return Response.json({ ok: false, error: validation.error }, { status: 400 });
  }

  const { data } = validation;
  const text = formatLeadEmail(data);
  const subject = leadSubject(data.type);
  const to = destinationForType(data.type);

  const result = await sendViaResend({
    to,
    subject,
    text,
    replyTo: data.email,
  });

  if (!result.sent) {
    console.log("Lead captured (email not sent):", text);
    if (process.env.NODE_ENV === "production") {
      return Response.json(
        {
          ok: false,
          error:
            "We could not deliver your request right now. Please email bookings@spatiofos.com directly.",
        },
        { status: 503 }
      );
    }
  }

  return Response.json({
    ok: true,
    emailed: result.sent,
    message: result.sent
      ? "Thank you — we'll be in touch shortly."
      : "Received (development mode — email not configured).",
  });
}
