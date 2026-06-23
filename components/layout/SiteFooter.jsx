import Link from "next/link";
import Logo from "@/components/layout/Logo";
import { trustItems } from "@/lib/content";

export default function SiteFooter() {
  return (
    <footer
      className="bg-[var(--navy-deep)] border-t border-[var(--border-navy)] pt-14 pb-8"
      role="contentinfo"
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Logo />
            <p className="text-[13px] text-white/40 mt-3 leading-relaxed max-w-[260px]">
              Spatial Intelligence for the Built Environment. Combining geospatial
              intelligence, AI, drone operations, and digital twins to help
              organisations understand and manage built assets.
            </p>
            <div className="flex flex-wrap gap-2 mt-5" role="list" aria-label="Certifications">
              {trustItems.slice(0, 4).map((item) => (
                <span
                  key={item}
                  className="text-[10px] font-semibold border border-[rgba(59,191,90,0.3)] text-[rgba(59,191,90,0.8)] px-2.5 py-0.5 rounded-full"
                  role="listitem"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h5 className="text-[11px] font-semibold tracking-widest uppercase text-white/35 mb-4">
              Solutions
            </h5>
            <Link href="/solutions/roof-intelligence" className="block text-[13px] text-white/55 no-underline mb-2 hover:text-white transition-colors">Roof Intelligence</Link>
            <Link href="/solutions/aviation-intelligence" className="block text-[13px] text-white/55 no-underline mb-2 hover:text-white transition-colors">Aviation Intelligence</Link>
            <Link href="/solutions/infrastructure-intelligence" className="block text-[13px] text-white/55 no-underline mb-2 hover:text-white transition-colors">Infrastructure Intelligence</Link>
            <Link href="/asset-intelligence-platform" className="block text-[13px] text-white/55 no-underline mb-2 hover:text-white transition-colors">Asset Intelligence Platform</Link>
          </div>
          <div>
            <h5 className="text-[11px] font-semibold tracking-widest uppercase text-white/35 mb-4">
              Industries
            </h5>
            <Link href="/industries" className="block text-[13px] text-white/55 no-underline mb-2 hover:text-white transition-colors">Residential</Link>
            <Link href="/industries" className="block text-[13px] text-white/55 no-underline mb-2 hover:text-white transition-colors">Strata &amp; Commercial</Link>
            <Link href="/industries" className="block text-[13px] text-white/55 no-underline mb-2 hover:text-white transition-colors">Insurance</Link>
            <Link href="/industries" className="block text-[13px] text-white/55 no-underline mb-2 hover:text-white transition-colors">Councils &amp; Utilities</Link>
            <Link href="/industries" className="block text-[13px] text-white/55 no-underline mb-2 hover:text-white transition-colors">Airports</Link>
          </div>
          <div>
            <h5 className="text-[11px] font-semibold tracking-widest uppercase text-white/35 mb-4">
              Company
            </h5>
            <Link href="/why-spatiofos" className="block text-[13px] text-white/55 no-underline mb-2 hover:text-white transition-colors">Why SpatioFos</Link>
            <Link href="/pricing" className="block text-[13px] text-white/55 no-underline mb-2 hover:text-white transition-colors">Pricing</Link>
            <Link href="/get-roof-score" className="block text-[13px] text-white/55 no-underline mb-2 hover:text-white transition-colors">Free Roof Score</Link>
            <Link href="/contact" className="block text-[13px] text-white/55 no-underline mb-2 hover:text-white transition-colors">Contact</Link>
            <Link href="/app" className="block text-[13px] text-white/55 no-underline mb-2 hover:text-white transition-colors">Client Portal</Link>
            <Link href="/privacy" className="block text-[13px] text-white/55 no-underline mb-2 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="block text-[13px] text-white/55 no-underline mb-2 hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
        <div className="border-t border-[var(--border-navy)] pt-6 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-white/30">
            © {new Date().getFullYear()} SpatioFos Pty Ltd. All rights reserved. Brisbane, Queensland, Australia.
          </span>
          <span className="font-display text-xs font-semibold text-[rgba(59,191,90,0.6)] tracking-wide">
            Spatial Intelligence. Real Impact.
          </span>
        </div>
      </div>
    </footer>
  );
}
