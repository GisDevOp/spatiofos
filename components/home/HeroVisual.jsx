import { defectTelemetry } from "@/lib/content";

const severityStyles = {
  critical: "bg-[rgba(220,53,69,0.15)] text-[#F08090]",
  moderate: "bg-[rgba(255,193,7,0.15)] text-[#FFD966]",
  low: "bg-[rgba(59,191,90,0.15)] text-[#7EE09A]",
};

export default function HeroVisual() {
  return (
    <div
      className="hidden md:block bg-white/[0.03] border border-[var(--border-navy)] rounded-[var(--radius-lg)] p-6 relative overflow-hidden"
      aria-hidden="true"
    >
      <div className="text-[10px] font-semibold tracking-widest uppercase text-[var(--green)] mb-4">
        Live Inspection Feed
      </div>
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        {[
          { label: "ALTITUDE", value: "120", unit: "m" },
          { label: "RESOLUTION", value: "2.3", unit: "cm/px" },
          { label: "COVERAGE", value: "73", unit: "%" },
          { label: "WIND SPEED", value: "12", unit: "km/h" },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-white/[0.05] border border-[var(--border-navy)] rounded-lg px-3 py-2.5"
          >
            <div className="text-[10px] text-white/40 tracking-wide mb-0.5">
              {item.label}
            </div>
            <div className="font-display text-lg font-bold text-white">
              {item.value}
              <span className="text-[10px] text-[var(--green)] ml-1">
                {item.unit}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-[10px] font-semibold tracking-widest uppercase text-[var(--green)] mt-4 mb-2">
        AI Defect Detection
      </div>
      <div>
        {defectTelemetry.map((d) => (
          <div
            key={d.name}
            className="flex items-center justify-between py-2 border-b border-white/[0.06] text-xs last:border-b-0"
          >
            <span className="text-white/70">{d.name}</span>
            <span
              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize ${severityStyles[d.severity]}`}
            >
              {d.severity}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 h-[3px] bg-white/[0.08] rounded-sm overflow-hidden">
        <div className="hero-scan-fill" />
      </div>
    </div>
  );
}
