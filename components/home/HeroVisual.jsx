import { defectTelemetry } from "@/lib/content";

const severityStyles = {
  critical: "bg-[rgba(220,53,69,0.15)] text-[#F08090]",
  moderate: "bg-[rgba(255,193,7,0.15)] text-[#FFD966]",
  low: "bg-[rgba(59,191,90,0.15)] text-[#7EE09A]",
};

const telemetry = [
  { label: "ALTITUDE", value: "120", unit: "m" },
  { label: "RESOLUTION", value: "2.3", unit: "cm/px" },
  { label: "COVERAGE", value: "73", unit: "%" },
  { label: "WIND SPEED", value: "12", unit: "km/h" },
];

export default function HeroVisual() {
  return (
    <div
      className="bg-white/[0.03] border border-[var(--border-navy)] rounded-[var(--radius-lg)] p-4 sm:p-6 relative overflow-hidden mt-8 lg:mt-0"
      aria-hidden="true"
    >
      <div className="text-[10px] font-semibold tracking-widest uppercase text-[var(--green)] mb-3 sm:mb-4 flex items-center justify-between gap-2">
        <span>Example Report Dashboard</span>
        <span className="text-[9px] font-normal normal-case tracking-normal text-white/40">
          Illustrative only
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:gap-2.5 mb-4">
        {telemetry.map((item) => (
          <div
            key={item.label}
            className="bg-white/[0.05] border border-[var(--border-navy)] rounded-lg px-2.5 sm:px-3 py-2 sm:py-2.5"
          >
            <div className="text-[9px] sm:text-[10px] text-white/50 tracking-wide mb-0.5">
              {item.label}
            </div>
            <div className="font-display text-base sm:text-lg font-bold text-white">
              {item.value}
              <span className="text-[9px] sm:text-[10px] text-[var(--green)] ml-1">
                {item.unit}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="text-[10px] font-semibold tracking-widest uppercase text-[var(--green)] mt-3 sm:mt-4 mb-2">
        Example defect register
      </div>
      <div>
        {defectTelemetry.map((d) => (
          <div
            key={d.name}
            className="flex items-center justify-between py-1.5 sm:py-2 border-b border-white/[0.06] text-[11px] sm:text-xs last:border-b-0 gap-2"
          >
            <span className="text-white/75 truncate">{d.name}</span>
            <span
              className={`text-[9px] sm:text-[10px] font-semibold px-2 py-0.5 rounded-full capitalize shrink-0 ${severityStyles[d.severity]}`}
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
