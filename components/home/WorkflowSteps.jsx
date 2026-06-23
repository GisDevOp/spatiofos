import Section from "@/components/ui/Section";
import { workflowSteps } from "@/lib/content";

function StepCard({ step }) {
  const isRoadmap = step.phase === "roadmap";
  return (
    <div
      className={`shrink-0 snap-start w-[148px] lg:w-auto lg:flex-1 lg:min-w-[120px] rounded-[var(--radius-md)] px-4 py-5 text-center ${
        isRoadmap
          ? "bg-white/[0.02] border border-dashed border-white/15 opacity-80"
          : "bg-white/[0.04] border border-white/[0.09]"
      }`}
    >
      {isRoadmap && (
        <div className="text-[9px] font-semibold uppercase tracking-wider text-white/40 mb-1">
          Roadmap
        </div>
      )}
      <div className="font-display text-[10px] font-bold tracking-widest text-[var(--green)] mb-1.5">
        {step.num}
      </div>
      <div className="text-[13px] font-semibold text-white mb-1">{step.title}</div>
      <div className="text-[11px] text-white/50 leading-snug">{step.desc}</div>
    </div>
  );
}

export default function WorkflowSteps({ embedded = false }) {
  const steps = (
    <div className={embedded ? "" : "mt-10"}>
      <div
        className="scroll-row lg:flex lg:flex-wrap lg:items-stretch lg:overflow-visible"
        role="list"
        aria-label="Workflow steps"
      >
        {workflowSteps.map((step, i) => (
          <div key={step.num} className="contents" role="listitem">
            <StepCard step={step} />
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
      <p className="lg:hidden text-[11px] text-white/40 mt-2 text-center">
        Swipe to see all steps →
      </p>
    </div>
  );

  if (embedded) return steps;

  return (
    <Section id="workflow" variant="dark">
      <p className="label label--light">Our process</p>
      <h2 className="section-title section-title--light">
        From capture to report — with a clear roadmap beyond
      </h2>
      <p className="section-sub section-sub--light">
        Every inspection follows a repeatable capture and analysis workflow.
        Digital twin and predictive features are on our platform roadmap.
      </p>
      {steps}
    </Section>
  );
}
