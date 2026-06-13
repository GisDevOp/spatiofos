import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "About | SpatioFos",
  description:
    "SpatioFos is an Inspection Intelligence Platform combining GIS, AI, drones, and digital twins for the built environment. Based in Brisbane, QLD.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Spatial Intelligence for the Built Environment"
        subtitle="We're not a drone photography company. We're building the inspection intelligence platform for assets that matter."
      />
      <Section>
        <div className="max-w-2xl space-y-6 text-sm text-[var(--slate)] leading-relaxed">
          <p>
            SpatioFos combines GIS expertise, drone operations, AWS cloud
            architecture, and planning background to deliver inspection
            intelligence that traditional providers cannot match. This
            founder-market fit is uncommon in the inspection industry.
          </p>
          <p>
            We operate under the Inspection Intelligence Capture Standard
            (IICS) — ensuring repeatable data quality, AI-ready capture,
            geospatial integrity with RTK and GDA2020, and enterprise-grade
            auditability on every inspection.
          </p>
          <p>
            Launching in South East Queensland, we serve Brisbane, Gold Coast,
            Sunshine Coast, Ipswich, Logan, and Moreton Bay — with Brisbane 2032
            Olympics infrastructure driving long-term asset intelligence demand.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-8">
          <Button href="/solutions/roof-intelligence" variant="primary">
            Roof Intelligence
          </Button>
          <Button href="/asset-intelligence-platform" variant="outline">
            Platform Vision
          </Button>
        </div>
      </Section>
    </>
  );
}
