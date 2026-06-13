export default function ReportPreview() {
  return (
    <div className="bg-white border border-[#E2EAF3] rounded-[var(--radius-lg)] overflow-hidden shadow-[0_4px_24px_rgba(11,30,53,0.08)]">
      <div className="bg-[var(--navy-deep)] px-5 py-3 flex items-center justify-between">
        <span className="text-[10px] font-semibold tracking-widest uppercase text-[var(--green)]">
          Sample Report Preview
        </span>
        <span className="text-[10px] text-white/40">Roof Intelligence Report</span>
      </div>
      <div className="grid md:grid-cols-2 gap-0">
        <div className="bg-[var(--offwhite)] p-6 min-h-[200px] relative">
          <div
            className="absolute inset-4 rounded-lg border border-[#DDE5EE]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,191,90,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,191,90,0.08) 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          >
            <div className="absolute top-6 left-8 w-4 h-4 rounded-full bg-[rgba(220,53,69,0.3)] border-2 border-[#F08090]" />
            <div className="absolute top-16 right-12 w-3 h-3 rounded-full bg-[rgba(255,193,7,0.3)] border-2 border-[#FFD966]" />
            <div className="absolute bottom-10 left-1/3 w-3 h-3 rounded-full bg-[rgba(59,191,90,0.3)] border-2 border-[#7EE09A]" />
          </div>
          <p className="absolute bottom-3 left-6 text-[10px] text-[var(--muted)]">
            GIS defect overlay map
          </p>
        </div>
        <div className="p-6">
          <div className="mb-4">
            <div className="text-[10px] text-[var(--muted)] uppercase tracking-wide mb-1">
              Overall Risk Score
            </div>
            <div className="font-display text-4xl font-bold text-[var(--green-dark)]">
              72<span className="text-lg text-[var(--muted)]">/100</span>
            </div>
            <div className="text-xs text-[#856404] font-medium mt-1">
              Moderate — maintenance recommended within 6 months
            </div>
          </div>
          <div className="space-y-2 border-t border-[#EEF3F8] pt-4">
            {[
              { label: "Critical defects", value: "1" },
              { label: "Moderate defects", value: "3" },
              { label: "Low priority", value: "2" },
              { label: "Report turnaround", value: "24hr" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex justify-between text-[13px]"
              >
                <span className="text-[var(--slate)]">{row.label}</span>
                <span className="font-semibold text-[var(--navy)]">
                  {row.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
