import ComparisonTable from "@/components/home/ComparisonTable";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export const metadata = {
  title: "Why SpatioFos | Inspection Intelligence Platform",
  description:
    "See how SpatioFos compares to traditional inspectors and generic drone operators. AI, GIS, and asset intelligence in one platform.",
};

export default function WhySpatioFosPage() {
  return (
    <>
      <PageHero
        label="Why SpatioFos"
        title="Not just a drone operator"
        subtitle="We combine geospatial intelligence, AI, and asset analytics — capabilities no traditional inspector or generic drone provider can offer."
      />
      <ComparisonTable extended />
      <Section variant="light">
        <h2 className="section-title">Built for South East Queensland</h2>
        <p className="section-sub mb-6">
          From Brisbane to the Gold Coast, Sunshine Coast, Ipswich, Logan, and
          Moreton Bay — we understand SEQ&apos;s climate exposure, storm patterns,
          and growing roof asset inventory. Brisbane 2032 infrastructure expansion
          is driving demand for digital asset intelligence.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/solutions/roof-intelligence" variant="primary">
            Explore Roof Intelligence
          </Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}
