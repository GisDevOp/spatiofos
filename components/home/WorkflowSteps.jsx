import Section from "@/components/ui/Section";
import { workflowSteps } from "@/lib/content";

export default function WorkflowSteps({ embedded = false }) {
  const content = (
    <>
      {!embedded && (
        <>
          <p className="label label--light">Our process</p>
          <h2 className="section-title section-title--light">
            Six steps from capture to intelligence
          </h2>
          <p className="section-sub section-sub--light">
            Every inspection feeds the SpatioFos Asset Intelligence Platform —
            turning raw drone imagery into predictive maintenance data.
          </p>
        </>
      )}
      <div
        className={`flex flex-wrap items-stretch gap-2 ${embedded ? "" : "mt-10"}`}
        role="list"
      >
        {workflowSteps.map((step, i) => (
          <div key={step.num} className="contents" role="listitem">
            <div className="flex-1 min-w-[120px] bg-white/[0.04] border border-white/[0.09] rounded-[var(--radius-md)] px-4 py-5 text-center">
              <div className="font-display text-[10px] font-bold tracking-widest text-[var(--green)] mb-1.5">
                {step.num}
              </div>
              <div className="text-[13px] font-semibold text-white mb-1">
                {step.title}
              </div>
              <div className="text-[11px] text-white/38 leading-snug">
                {step.desc}
              </div>
            </div>
            {i < workflowSteps.length - 1 && (
              <span
                className="hidden lg:flex shrink-0 self-center text-[var(--green)] text-lg px-1"
                aria-hidden="true"
              >
                ›
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );

  if (embedded) return content;

  return (
    <Section id="workflow" variant="dark">
      {content}
    </Section>
  );
}
