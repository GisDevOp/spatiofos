import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { editorialCalendar } from "@/lib/content";

export const metadata = {
  title: "Resources & Blog | SpatioFos",
  description:
    "Roof inspection guides, drone inspection insights, and SEQ property intelligence articles. Coming soon.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        label="Resources"
        title="Insights & Guides"
        subtitle="SEO-driven content for homeowners, strata managers, and property professionals across South East Queensland."
      />
      <Section variant="light">
        <div className="inline-flex items-center gap-2 bg-[var(--offwhite)] border border-[#DDE5EE] text-[var(--slate)] text-xs font-semibold px-3 py-1 rounded-full mb-8">
          🔒 Blog launching soon
        </div>
        <h2 className="section-title text-xl mb-6">Editorial calendar preview</h2>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
          {editorialCalendar.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#E2EAF3] rounded-[var(--radius-md)] p-5"
            >
              <div className="text-[10px] font-semibold text-[var(--green-dark)] uppercase tracking-wide mb-1">
                {item.month}
              </div>
              <h3 className="text-sm font-semibold text-[var(--navy)] mb-1">
                {item.title}
              </h3>
              <p className="text-[11px] text-[var(--muted)]">{item.keyword}</p>
            </div>
          ))}
        </div>
        <Button href="/contact" variant="primary" className="mt-8">
          Notify Me When Live
        </Button>
      </Section>
    </>
  );
}
