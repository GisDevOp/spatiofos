import Section from "@/components/ui/Section";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <Section id="testimonials">
      <p className="label">Client stories</p>
      <h2 className="section-title">
        Trusted by homeowners, strata managers, and insurers
      </h2>
      <div className="grid md:grid-cols-3 gap-4.5 mt-10">
        {testimonials.map((t) => (
          <div
            key={t.initials}
            className="bg-white border border-[#E2EAF3] rounded-[var(--radius-lg)] p-6"
          >
            <div className="text-[var(--green)] text-sm mb-3" aria-label="5 stars">
              ★★★★★
            </div>
            <p className="text-sm text-[var(--navy)] leading-relaxed italic mb-4">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-full bg-[var(--green-pale)] border-[1.5px] border-[var(--green-mid)] flex items-center justify-center text-[13px] font-bold text-[var(--green-dark)] shrink-0"
                aria-hidden="true"
              >
                {t.initials}
              </div>
              <div>
                <div className="text-[13px] font-semibold text-[var(--navy)]">
                  {t.name}
                </div>
                <div className="text-[11px] text-[var(--muted)]">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
