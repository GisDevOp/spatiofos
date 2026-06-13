import { outcomes } from "@/lib/content";

export default function OutcomesStrip() {
  return (
    <section className="bg-[var(--navy)] py-12" id="outcomes" aria-label="Outcomes">
      <div className="container">
        <p className="label label--light">Measurable outcomes</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mt-6">
          {outcomes.map((o) => (
            <div
              key={o.label}
              className="bg-white/[0.04] border border-[var(--border-navy)] rounded-[var(--radius-md)] p-5 border-l-[3px] border-l-[var(--green)]"
            >
              <div className="font-display text-[22px] font-bold text-[var(--green)] mb-1">
                {o.metric}
              </div>
              <div className="text-xs text-white/55 leading-snug">{o.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
