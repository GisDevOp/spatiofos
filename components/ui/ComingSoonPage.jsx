import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";

export default function ComingSoonPage({
  title,
  description,
  children,
  ctaLabel = "Register Interest",
  ctaHref = "/contact",
}) {
  return (
    <>
      <PageHero label="Coming Soon" title={title} subtitle={description} />
      <Section variant="light">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[var(--offwhite)] border border-[#DDE5EE] text-[var(--slate)] text-xs font-semibold px-3 py-1 rounded-full mb-6">
            🔒 Launching soon
          </div>
          <p className="text-[var(--slate)] text-sm leading-relaxed mb-8">
            We&apos;re building this now. Register your interest and we&apos;ll
            notify you when it goes live.
          </p>
          {children}
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
          </Button>
        </div>
      </Section>
    </>
  );
}
