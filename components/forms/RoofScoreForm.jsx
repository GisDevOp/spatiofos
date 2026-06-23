"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function RoofScoreForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.target;
    const payload = {
      type: "roof-score",
      address: form.address.value,
      roofType: form.roofType.value,
      roofAge: form.roofAge.value,
      name: form.name.value,
      email: form.email.value,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Submission failed");
      }
      trackEvent("form_submit", { form_type: "roof-score" });
      trackEvent("generate_lead", { form_type: "roof-score" });
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        className={`rounded-[var(--radius-lg)] p-8 text-center animate-fade-up ${
          compact
            ? "bg-[var(--green-pale)] border border-[var(--green-mid)]"
            : "bg-white/10 border border-white/15"
        }`}
        role="status"
        aria-live="polite"
      >
        <div
          className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center text-xl ${
            compact ? "bg-[var(--green-mid)] text-[var(--green-dark)]" : "bg-white/15 text-[var(--green)]"
          }`}
          aria-hidden="true"
        >
          ✓
        </div>
        <p
          className={`font-display font-semibold text-lg mb-2 ${
            compact ? "text-[var(--navy)]" : "text-white"
          }`}
        >
          You&apos;re registered!
        </p>
        <p className={`text-sm ${compact ? "text-[var(--slate)]" : "text-white/70"}`}>
          We&apos;ll notify you when your Roof Intelligence Score is available. For an
          immediate inspection, visit our pricing page.
        </p>
      </div>
    );
  }

  const labelClass = compact
    ? "text-xs font-medium text-[var(--slate)] mb-1.5 block"
    : "text-xs font-medium text-white/75 mb-1.5 block";
  const inputClass = compact
    ? "input-field input-field--light focus-ring"
    : "input-field input-field--dark focus-ring";

  return (
    <form
      onSubmit={handleSubmit}
      className={
        compact
          ? "bg-white border border-[#E2EAF3] rounded-[var(--radius-lg)] p-6 sm:p-8 shadow-[var(--shadow-sm)]"
          : "bg-white/10 border border-white/15 rounded-[var(--radius-lg)] p-6 sm:p-8"
      }
      noValidate={false}
    >
      <h4
        className={`font-display text-[17px] font-semibold mb-5 ${
          compact ? "text-[var(--navy)]" : "text-white"
        }`}
      >
        Request your free Roof Intelligence Score
      </h4>
      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-[var(--radius-sm)] px-3 py-2 mb-3" role="alert">
          {error}
        </p>
      )}
      <div className="mb-3">
        <label htmlFor="fi-address" className={labelClass}>
          Property address
        </label>
        <input
          type="text"
          id="fi-address"
          name="address"
          required
          autoComplete="street-address"
          placeholder="123 Main Street, Brisbane QLD"
          className={inputClass}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fi-type" className={labelClass}>
          Roof type
        </label>
        <select id="fi-type" name="roofType" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select roof type
          </option>
          <option>Metal / Colorbond</option>
          <option>Concrete or terracotta tile</option>
          <option>Flat / membrane</option>
          <option>Asphalt shingle</option>
          <option>Unknown</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="fi-age" className={labelClass}>
          Approximate roof age
        </label>
        <select id="fi-age" name="roofAge" required className={inputClass} defaultValue="">
          <option value="" disabled>
            Select age range
          </option>
          <option>Under 5 years</option>
          <option>5–15 years</option>
          <option>15–25 years</option>
          <option>25+ years</option>
          <option>Unknown</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="fi-name" className={labelClass}>
          Your name
        </label>
        <input
          type="text"
          id="fi-name"
          name="name"
          required
          autoComplete="name"
          placeholder="Full name"
          className={inputClass}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fi-email" className={labelClass}>
          Email address
        </label>
        <input
          type="email"
          id="fi-email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[var(--green)] text-white border-none py-3 rounded-[var(--radius-sm)] text-sm font-semibold cursor-pointer hover:bg-[var(--green-dark)] transition-all duration-200 mt-1 focus-ring disabled:opacity-70 disabled:cursor-wait"
      >
        {submitting ? "Submitting…" : "Get My Free Roof Score →"}
      </button>
      <p
        className={`text-[11px] mt-2 text-center ${
          compact ? "text-[var(--muted)]" : "text-white/50"
        }`}
      >
        No spam. Your data is used only to generate your score. See our{" "}
        <a href="/privacy" className="underline">
          privacy policy
        </a>
        .
      </p>
    </form>
  );
}
