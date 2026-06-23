"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

const HIDDEN_ON = ["/contact", "/get-roof-score", "/app"];

export default function MobileCtaBar() {
  const pathname = usePathname();

  if (HIDDEN_ON.some((path) => pathname === path || pathname.startsWith(`${path}/`))) {
    return null;
  }

  return (
    <div className="mobile-cta-bar md:hidden" role="region" aria-label="Quick actions">
      <Link
        href="/get-roof-score"
        className="mobile-cta-bar__secondary"
        onClick={() => trackEvent("booking_click", { source: "mobile_cta", action: "free_score" })}
      >
        Free Score
      </Link>
      <Link
        href="/pricing"
        className="mobile-cta-bar__primary"
        onClick={() => trackEvent("booking_click", { source: "mobile_cta", action: "book_inspection" })}
      >
        Book Inspection
      </Link>
    </div>
  );
}
