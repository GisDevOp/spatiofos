import Button from "@/components/ui/Button";
import FAQ from "@/components/product/FAQ";
import ReportPreview from "@/components/product/ReportPreview";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { roofDeliverables, roofServices } from "@/lib/content";

export const metadata = {
  title: "Roof Intelligence | SpatioFos Brisbane",
  description:
    "AI-assisted roof inspection service in Brisbane and SEQ. Drone capture, defect detection, risk scoring, GIS mapping, and PDF reports with 24hr target turnaround.",
  keywords: ["roof inspection service Brisbane", "AI defect detection roof"],
};

export default function RoofIntelligencePage() {
  return (
    <>
      <PageHero
        label="Flagship Service"
        title="Roof Intelligence"
        subtitle="AI-assisted residential and commercial roof inspections with 24-hour target turnaround, thermal imaging options, and insurance-structured documentation."
        dark
      >
        <div className="flex flex-wrap gap-3 mt-8">
          <Button href="/pricing" variant="primary">
            Book Inspection — 50% Off
          </Button>
          <Button href="/get-roof-score" variant="outlineWhite">
            Get Free Roof Score
          </Button>
        </div>
      </PageHero>

      <Section>
        <p className="label">Services</p>
        <h2 className="section-title">Six inspection services, one intelligence platform</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {roofServices.map((service) => (
            <div
              key={service.title}
              className="bg-[var(--offwhite)] border border-[#E2EAF3] rounded-[var(--radius-md)] p-6"
            >
              <h3 className="font-display font-semibold text-[var(--navy)] mb-2">
                {service.title}
              </h3>
              <p className="text-[13px] text-[var(--slate)] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/#workflow" variant="outline">
            See our inspection process →
          </Button>
        </div>
      </Section>

      <Section variant="light">
        <p className="label">Sample Report</p>
        <h2 className="section-title">See what you receive</h2>
        <p className="section-sub mb-8">
          Every Roof Intelligence Report includes annotated defect maps, risk
          scoring, and GIS-referenced imagery — with a 24-hour target turnaround.
        </p>
        <ReportPreview />
      </Section>

      <Section>
        <p className="label">Deliverables</p>
        <h2 className="section-title">What&apos;s included in every report</h2>
        <ul className="grid sm:grid-cols-2 gap-3 mt-8 max-w-2xl">
          {roofDeliverables.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm text-[var(--slate)] items-start"
            >
              <span className="text-[var(--green-dark)] font-bold shrink-0">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3 mt-10">
          <Button href="/pricing" variant="primary">
            View Pricing
          </Button>
          <Button href="/resources/sample-reports" variant="outline">
            Request Sample Report
          </Button>
        </div>
      </Section>

      <Section variant="light">
        <p className="label">FAQ</p>
        <h2 className="section-title mb-8">Common questions</h2>
        <FAQ />
      </Section>
    </>
  );
}
