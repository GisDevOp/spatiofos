import Section from "@/components/ui/Section";
import { industries } from "@/lib/content";

export default function IndustriesGrid() {
  return (
    <Section id="industries">
      <p className="label">Industries</p>
      <h2 className="section-title">Serving every sector with built assets</h2>
      <p className="section-sub">
        SpatioFos workflows are tailored to the documentation requirements, risk
        profiles, and reporting standards of each industry.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4.5 mt-8">
        {industries.map((ind) => (
          <div
            key={ind.title}
            className="card card--lg card--interactive p-7"
          >
            <div className="text-[22px] mb-4" aria-hidden="true">
              {ind.icon}
            </div>
            <h3 className="font-display text-base font-semibold text-[var(--navy)] mb-1.5">
              {ind.title}
            </h3>
            <p className="text-[13px] text-[var(--slate)] leading-relaxed">
              {ind.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
