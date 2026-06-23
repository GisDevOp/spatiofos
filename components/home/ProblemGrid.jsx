import Section from "@/components/ui/Section";
import { problems } from "@/lib/content";

export default function ProblemGrid() {
  return (
    <Section id="problem" variant="light">
      <p className="label">The problem</p>
      <h2 className="section-title">
        Traditional inspections are slow, risky, and subjective
      </h2>
      <p className="section-sub">
        Sending inspectors onto roofs creates liability, delays insurance claims,
        and produces inconsistent reports with no historical record to draw from.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
        {problems.map((p) => (
          <div
            key={p.title}
            className="card card--interactive p-6"
          >
            <div
              className="w-10 h-10 rounded-lg bg-[#FEF0F0] flex items-center justify-center text-xl mb-4"
              aria-hidden="true"
            >
              {p.icon}
            </div>
            <h3 className="text-sm font-semibold text-[var(--navy)] mb-1.5">
              {p.title}
            </h3>
            <p className="text-[13px] text-[var(--slate)] leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
