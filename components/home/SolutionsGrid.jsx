import Link from "next/link";
import Section from "@/components/ui/Section";
import { solutions } from "@/lib/content";

export default function SolutionsGrid() {
  return (
    <Section id="solutions">
      <p className="label">Solutions</p>
      <h2 className="section-title">Built for every scale of asset</h2>
      <p className="section-sub">
        From a single residential roof to a portfolio of infrastructure assets —
        SpatioFos has a service line to match your scale.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4.5 mt-10">
        {solutions.map((sol) => (
          <Link
            key={sol.slug}
            href={sol.href}
            className="bg-white border border-[#E2EAF3] rounded-[var(--radius-lg)] p-7 no-underline transition-all hover:border-[var(--green)] hover:shadow-[0_4px_20px_rgba(59,191,90,0.1)]"
          >
            {sol.flagship && (
              <span className="inline-block text-[10px] font-bold bg-[var(--green)] text-white px-2.5 py-0.5 rounded mb-3">
                Flagship Service
              </span>
            )}
            {!sol.active && !sol.flagship && (
              <span className="inline-block text-[10px] font-bold bg-[var(--offwhite)] text-[var(--slate)] border border-[#DDE5EE] px-2.5 py-0.5 rounded mb-3">
                Coming Soon
              </span>
            )}
            <div className="text-[22px] mb-4" aria-hidden="true">
              {sol.icon}
            </div>
            <h3 className="font-display text-base font-semibold text-[var(--navy)] mb-1.5">
              {sol.title}
            </h3>
            <p className="text-[13px] text-[var(--slate)] leading-relaxed mb-4">
              {sol.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {sol.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] text-[var(--slate)] bg-[var(--offwhite)] border border-[#DDE5EE] px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
