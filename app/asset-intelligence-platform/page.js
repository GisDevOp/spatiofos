import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import {
  platformFeatures,
  platformOutcomes,
  saasRoadmap,
} from "@/lib/content";

export const metadata = {
  title: "Asset Intelligence Platform | SpatioFos",
  description:
    "Enterprise GIS dashboard, digital twins, defect tracking, and predictive maintenance. Built from real inspection data. Request early access.",
};

export default function AssetIntelligencePlatformPage() {
  return (
    <>
      <PageHero
        label="Enterprise Platform"
        title="Asset Intelligence Platform"
        subtitle="Every inspection adds to a proprietary dataset no competitor can replicate. GIS-enabled portfolio intelligence for operators, managers, and investors."
        dark
      >
        <Button href="/contact" variant="primary" className="mt-8">
          Request Early Access
        </Button>
      </PageHero>

      <Section>
        <p className="label">Data Moat</p>
        <h2 className="section-title">Built from real inspections</h2>
        <p className="section-sub">
          The platform is not a generic SaaS template — it&apos;s being built from
          hundreds of real SEQ inspections, creating a proprietary inspection
          intelligence dataset that compounds in value with every flight.
        </p>
      </Section>

      <Section variant="light">
        <p className="label">Platform Features</p>
        <h2 className="section-title">Enterprise-grade capabilities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {platformFeatures.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-[#E2EAF3] rounded-[var(--radius-lg)] p-6"
            >
              <h3 className="font-display font-semibold text-[var(--navy)] mb-2">
                {f.title}
              </h3>
              <p className="text-[13px] text-[var(--slate)] leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-[var(--navy-deep)] rounded-[var(--radius-lg)] p-8 border border-[var(--border-navy)]">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-[var(--green)] mb-4">
            GIS Dashboard Preview
          </p>
          <div
            className="h-48 rounded-lg border border-[var(--border-navy)]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,191,90,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,191,90,0.1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
              backgroundColor: "rgba(255,255,255,0.03)",
            }}
          />
        </div>
      </Section>

      <Section>
        <p className="label">Outcomes</p>
        <h2 className="section-title">Value for every stakeholder</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {platformOutcomes.map((o) => (
            <div
              key={o.audience}
              className="border border-[#E2EAF3] rounded-[var(--radius-lg)] p-6 border-l-[3px] border-l-[var(--green)]"
            >
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--green-dark)] mb-2">
                {o.audience}
              </div>
              <p className="text-sm text-[var(--slate)] leading-relaxed">
                {o.outcome}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="dark">
        <p className="label label--light">Roadmap</p>
        <h2 className="section-title section-title--light">
          Platform evolution
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {saasRoadmap.map((stage) => (
            <div
              key={stage.stage}
              className="bg-white/[0.04] border border-[var(--border-navy)] rounded-[var(--radius-md)] p-5"
            >
              <div className="text-[10px] font-bold tracking-widest text-[var(--green)] mb-2">
                {stage.stage}
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">
                {stage.title}
              </h3>
              <p className="text-[11px] text-white/50 leading-relaxed">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button href="/contact" variant="primary">
            Request Platform Demo
          </Button>
        </div>
      </Section>
    </>
  );
}
