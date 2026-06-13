import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "Case Studies | SpatioFos — Coming Soon",
  description:
    "Real inspection case studies from residential, strata, and commercial clients across SEQ. Coming soon.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        label="Case Studies"
        title="Proof in the field"
        subtitle="Residential, strata, and commercial case studies documenting real inspection outcomes across South East Queensland."
      />
      <Section variant="light">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--offwhite)] border border-[#DDE5EE] text-[var(--slate)] text-xs font-semibold px-3 py-1 rounded-full mb-6">
            🔒 Coming soon
          </div>
          <p className="text-sm text-[var(--slate)] leading-relaxed mb-8">
            We&apos;re collecting our first client stories from launch inspections.
            Join the waitlist to be notified when case studies publish.
          </p>
          <Button href="/contact" variant="primary">
            Join Waitlist
          </Button>
        </div>
      </Section>
    </>
  );
}
