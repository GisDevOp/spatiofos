import Button from "@/components/ui/Button";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { trustItems } from "@/lib/content";

export default function LocationPage({ slug, details }) {
  return (
    <>
      <LocalBusinessSchema location={details.name} slug={slug} />
      <PageHero
        label="Service Area"
        title={`Roof Inspection in ${details.name}`}
        subtitle={`AI-powered drone roof inspections across ${details.suburbs}. Same-week availability with 24-hour report turnaround.`}
        dark
      />
      <Section>
        <p className="text-sm text-[var(--slate)] leading-relaxed max-w-2xl mb-8">
          {details.stormNote}
        </p>
        <div
          className="flex flex-wrap gap-4 mb-10"
          role="list"
          aria-label="Certifications"
        >
          {trustItems.map((item) => (
            <span
              key={item}
              className="text-xs font-medium text-[var(--slate)] flex items-center gap-2"
              role="listitem"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--green)]" />
              {item}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/pricing" variant="primary">
            Book Inspection
          </Button>
          <Button href="/get-roof-score" variant="outline">
            Get Free Roof Score
          </Button>
        </div>
      </Section>
    </>
  );
}
