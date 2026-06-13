import SampleReportForm from "@/components/forms/SampleReportForm";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "Sample Reports | SpatioFos",
  description:
    "Request a sample Roof Intelligence Report. See annotated defect maps, risk scoring, and GIS imagery before you book.",
};

export default function SampleReportsPage() {
  return (
    <>
      <PageHero
        label="Sample Reports"
        title="See exactly what you receive"
        subtitle="Request a sample inspection report with annotated defect map, thermal layer, and condition scoring."
      />
      <Section variant="light">
        <p className="text-sm text-[var(--slate)] text-center max-w-md mx-auto mb-8">
          Enter your details below. Sample report downloads will be available when
          our document library goes live.
        </p>
        <SampleReportForm />
      </Section>
    </>
  );
}
