"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

export default function SampleReportForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const form = e.target;
    const payload = {
      type: "sample-report",
      name: form.name.value,
      email: form.email.value,
      postcode: form.postcode.value,
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
      trackEvent("form_submit", { form_type: "sample-report" });
      trackEvent("generate_lead", { form_type: "sample-report" });
      setSubmitted(true);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-[var(--green-pale)] border border-[var(--green-mid)] rounded-[var(--radius-lg)] p-8 text-center max-w-md mx-auto animate-fade-up" role="status" aria-live="polite">
        <p className="font-display font-semibold text-lg text-[var(--navy)] mb-2">
          Request received
        </p>
        <p className="text-sm text-[var(--slate)]">
          We&apos;ll send your sample report shortly. Check your inbox for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-[#E2EAF3] rounded-[var(--radius-lg)] p-6 sm:p-8 max-w-md mx-auto shadow-[var(--shadow-sm)]"
    >
      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-[var(--radius-sm)] px-3 py-2 mb-3" role="alert">
          {error}
        </p>
      )}
      <div className="mb-3">
        <label htmlFor="sr-name" className="text-xs font-medium text-[var(--slate)] mb-1.5 block">
          Your name
        </label>
        <input
          type="text"
          id="sr-name"
          name="name"
          required
          autoComplete="name"
          className="input-field input-field--light focus-ring"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="sr-email" className="text-xs font-medium text-[var(--slate)] mb-1.5 block">
          Email address
        </label>
        <input
          type="email"
          id="sr-email"
          name="email"
          required
          autoComplete="email"
          className="input-field input-field--light focus-ring"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="sr-postcode" className="text-xs font-medium text-[var(--slate)] mb-1.5 block">
          Property postcode
        </label>
        <input
          type="text"
          id="sr-postcode"
          name="postcode"
          required
          placeholder="4000"
          autoComplete="postal-code"
          className="input-field input-field--light focus-ring"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[var(--green)] text-white py-3 rounded-[var(--radius-sm)] text-sm font-semibold cursor-pointer hover:bg-[var(--green-dark)] transition-all focus-ring disabled:opacity-70"
      >
        {submitting ? "Submitting…" : "Request Sample Report"}
      </button>
    </form>
  );
}
