"use client";

import { useState } from "react";

export default function SampleReportForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-[var(--green-pale)] border border-[var(--green-mid)] rounded-[var(--radius-lg)] p-8 text-center max-w-md mx-auto">
        <p className="font-display font-semibold text-lg text-[var(--navy)] mb-2">
          Request received
        </p>
        <p className="text-sm text-[var(--slate)]">
          We&apos;ll send your sample report when downloads go live.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-[#E2EAF3] rounded-[var(--radius-lg)] p-8 max-w-md mx-auto"
    >
      <div className="mb-3">
        <label htmlFor="sr-name" className="text-xs font-medium text-[var(--slate)] mb-1.5 block">
          Your name
        </label>
        <input
          type="text"
          id="sr-name"
          name="name"
          required
          className="w-full px-3.5 py-2.5 border border-[#DDE5EE] rounded-[var(--radius-sm)] text-sm outline-none focus:border-[var(--green)]"
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
          className="w-full px-3.5 py-2.5 border border-[#DDE5EE] rounded-[var(--radius-sm)] text-sm outline-none focus:border-[var(--green)]"
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
          className="w-full px-3.5 py-2.5 border border-[#DDE5EE] rounded-[var(--radius-sm)] text-sm outline-none focus:border-[var(--green)]"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[var(--green)] text-white py-3 rounded-[var(--radius-sm)] text-sm font-semibold cursor-pointer hover:bg-[var(--green-dark)]"
      >
        Request Sample Report
      </button>
    </form>
  );
}
