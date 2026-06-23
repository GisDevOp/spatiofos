import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { site } from "@/lib/content";

const paths = [
  {
    icon: "📅",
    title: "Book an Inspection",
    description:
      "Residential inspections available now. Select your package and we'll confirm availability within 4 hours.",
    cta: "Email to Book →",
    href: `mailto:${site.emails.bookings}`,
    variant: "primary",
  },
  {
    icon: "💬",
    title: "Enterprise & Platform Enquiries",
    description:
      "Commercial, strata, insurance, and asset platform conversations. We'll schedule a tailored demo.",
    cta: "Contact Enterprise Team →",
    href: `mailto:${site.emails.enterprise}`,
    variant: "dark",
  },
  {
    icon: "📄",
    title: "View a Sample Report",
    description:
      "See exactly what you receive before committing. Includes annotated defect map, thermal layer, and condition scoring.",
    cta: "Request Sample →",
    href: `mailto:${site.emails.hello}?subject=Sample Report Request`,
    variant: "dark",
  },
];

export default function ContactPaths() {
  return (
    <Section id="contact">
      <p className="label">Get in touch</p>
      <h2 className="section-title">Ready to book or have a question?</h2>
      <p className="section-sub">
        Residential bookings are available now at launch pricing. For commercial,
        enterprise, or platform enquiries, reach out directly and we&apos;ll
        respond within one business day.
      </p>
      <div className="grid md:grid-cols-3 gap-4.5 mt-10">
        {paths.map((path) => (
          <div
            key={path.title}
            className="bg-[var(--offwhite)] rounded-[var(--radius-lg)] p-7 border border-transparent hover:border-[rgba(59,191,90,0.25)] hover:shadow-[var(--shadow-sm)] transition-all duration-200"
          >
            <div className="text-[28px] mb-3" aria-hidden="true">
              {path.icon}
            </div>
            <h3 className="font-display text-base font-semibold text-[var(--navy)] mb-1.5">
              {path.title}
            </h3>
            <p className="text-[13px] text-[var(--slate)] leading-relaxed mb-5">
              {path.description}
            </p>
            <Button href={path.href} variant={path.variant}>
              {path.cta}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
