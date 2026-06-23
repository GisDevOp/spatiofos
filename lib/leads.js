const LEAD_TYPES = new Set(["roof-score", "sample-report", "contact"]);

export function isValidLeadType(type) {
  return LEAD_TYPES.has(type);
}

export function validateLeadPayload(body) {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }

  const type = String(body.type || "").trim();
  if (!isValidLeadType(type)) {
    return { ok: false, error: "Invalid lead type." };
  }

  const email = String(body.email || "").trim().toLowerCase();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Valid email is required." };
  }

  const name = String(body.name || "").trim();
  if (!name) {
    return { ok: false, error: "Name is required." };
  }

  if (type === "roof-score") {
    const address = String(body.address || "").trim();
    if (!address) return { ok: false, error: "Property address is required." };
    if (!body.roofType) return { ok: false, error: "Roof type is required." };
    if (!body.roofAge) return { ok: false, error: "Roof age is required." };
  }

  if (type === "sample-report") {
    const postcode = String(body.postcode || "").trim();
    if (!postcode) return { ok: false, error: "Postcode is required." };
  }

  if (type === "contact") {
    const message = String(body.message || "").trim();
    if (!message) return { ok: false, error: "Message is required." };
  }

  return {
    ok: true,
    data: {
      type,
      email,
      name,
      address: body.address ? String(body.address).trim() : "",
      roofType: body.roofType ? String(body.roofType).trim() : "",
      roofAge: body.roofAge ? String(body.roofAge).trim() : "",
      postcode: body.postcode ? String(body.postcode).trim() : "",
      message: body.message ? String(body.message).trim() : "",
      tier: body.tier ? String(body.tier).trim() : "",
    },
  };
}

export function formatLeadEmail(data) {
  const lines = [
    `New SpatioFos lead: ${data.type}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
  ];

  if (data.address) lines.push(`Address: ${data.address}`);
  if (data.roofType) lines.push(`Roof type: ${data.roofType}`);
  if (data.roofAge) lines.push(`Roof age: ${data.roofAge}`);
  if (data.postcode) lines.push(`Postcode: ${data.postcode}`);
  if (data.tier) lines.push(`Tier: ${data.tier}`);
  if (data.message) lines.push("", "Message:", data.message);

  lines.push("", `Submitted: ${new Date().toISOString()}`);
  return lines.join("\n");
}

export function leadSubject(type) {
  const subjects = {
    "roof-score": "Roof Intelligence Score registration",
    "sample-report": "Sample report request",
    contact: "Website contact enquiry",
  };
  return `[SpatioFos] ${subjects[type] || "New lead"}`;
}
