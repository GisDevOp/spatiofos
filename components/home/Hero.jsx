import Button from "@/components/ui/Button";
import HeroVisual from "@/components/home/HeroVisual";
import { trustItems } from "@/lib/content";

export default function Hero() {
  return (
    <header
      className="relative overflow-hidden bg-[var(--navy-deep)] pt-20 pb-16"
      role="banner"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,191,90,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(59,191,90,0.06) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-30 -top-20 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,191,90,0.08) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[rgba(59,191,90,0.12)] border border-[rgba(59,191,90,0.3)] text-[var(--green)] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 font-display tracking-wide">
              <span className="pulse" aria-hidden="true" />
              Now live in South East Queensland
            </div>
            <h1 className="font-display text-[clamp(32px,4vw,46px)] font-bold text-white leading-[1.12] tracking-tight mb-5">
              AI-Powered Roof &amp;
              <br />
              <em className="text-[var(--green)] not-italic">Asset Intelligence</em>
            </h1>
            <p className="text-[15px] text-white/62 leading-relaxed mb-8 max-w-[480px]">
              Detect defects, reduce maintenance costs, and receive professional
              inspection reports within 24 hours. No roof access required. Powered
              by SpatioFos Asset Intelligence™.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Button href="/pricing" variant="primary">
                Book Inspection — 50% Off Launch
              </Button>
              <Button href="/asset-intelligence-platform" variant="outlineWhite">
                Request Platform Demo
              </Button>
            </div>
            <div
              className="bg-white/[0.04] border border-white/[0.08] rounded-[var(--radius-md)] px-5 py-3.5 flex flex-wrap gap-4 items-center"
              role="list"
              aria-label="Certifications"
            >
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-white/58"
                  role="listitem"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[var(--green)] shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <HeroVisual />
        </div>
      </div>
    </header>
  );
}
