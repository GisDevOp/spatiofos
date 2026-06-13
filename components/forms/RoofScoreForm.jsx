"use client";

import { useState } from "react";

export default function RoofScoreForm({ compact = false }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`rounded-[var(--radius-lg)] p-8 text-center ${
          compact
            ? "bg-[var(--green-pale)] border border-[var(--green-mid)]"
            : "bg-white/10 border border-white/15"
        }`}
      >
        <p
          className={`font-display font-semibold text-lg mb-2 ${
            compact ? "text-[var(--navy)]" : "text-white"
          }`}
        >
          Thank you!
        </p>
        <p className={`text-sm ${compact ? "text-[var(--slate)]" : "text-white/70"}`}>
          We&apos;ll be in touch when lead capture goes live. Your Roof Intelligence
          Score request has been noted.
        </p>
      </div>
    );
  }

  const labelClass = compact
    ? "text-xs font-medium text-[var(--slate)] mb-1.5 block"
    : "text-xs font-medium text-white/65 mb-1.5 block";
  const inputClass = compact
    ? "w-full px-3.5 py-2.5 bg-white border border-[#DDE5EE] rounded-[var(--radius-sm)] text-sm text-[var(--navy)] outline-none focus:border-[var(--green)]"
    : "w-full px-3.5 py-2.5 bg-white/12 border border-white/20 rounded-[var(--radius-sm)] text-sm text-white outline-none focus:border-[var(--green)] placeholder:text-white/40";

  return (
    <form
      onSubmit={handleSubmit}
      className={
        compact
          ? "bg-white border border-[#E2EAF3] rounded-[var(--radius-lg)] p-8"
          : "bg-white/10 border border-white/15 rounded-[var(--radius-lg)] p-8"
      }
    >
      <h4
        className={`font-display text-[17px] font-semibold mb-5 ${
          compact ? "text-[var(--navy)]" : "text-white"
        }`}
      >
        Request your free Roof Intelligence Score
      </h4>
      <div className="mb-3">
        <label htmlFor="fi-address" className={labelClass}>
          Property address
        </label>
        <input
          type="text"
          id="fi-address"
          name="address"
          required
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
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[var(--green)] text-white border-none py-3 rounded-[var(--radius-sm)] text-sm font-semibold cursor-pointer hover:bg-[var(--green-dark)] transition-colors mt-1"
      >
        Get My Free Roof Score →
      </button>
      <p
        className={`text-[11px] mt-2 text-center ${
          compact ? "text-[var(--muted)]" : "text-white/40"
        }`}
      >
        No spam. Your data is used only to generate your score.
      </p>
    </form>
  );
}
