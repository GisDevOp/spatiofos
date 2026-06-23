import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "Terms of Service | SpatioFos",
  description: "Terms governing use of SpatioFos website and inspection services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero label="Legal" title="Terms of Service" subtitle="Last updated: June 2026" />
      <Section>
        <div className="max-w-2xl space-y-4 text-sm text-[var(--slate)] leading-relaxed">
          <p>
            These terms govern your use of the SpatioFos website and Roof Intelligence
            inspection services operated by SpatioFos Pty Ltd.
          </p>
          <h2 className="font-display text-lg font-semibold text-[var(--navy)]">
            Services
          </h2>
          <p>
            Roof Intelligence reports are visual condition assessments based on drone capture
            and AI-assisted analysis with human review. They are not structural engineering
            certifications unless explicitly stated in writing.
          </p>
          <h2 className="font-display text-lg font-semibold text-[var(--navy)]">
            Bookings and payment
          </h2>
          <p>
            Pricing displayed on the website applies to listed tiers. Payment terms are confirmed
            at booking. Turnaround targets are estimates, not guarantees.
          </p>
          <h2 className="font-display text-lg font-semibold text-[var(--navy)]">
            Limitation of liability
          </h2>
          <p>
            To the extent permitted by law, SpatioFos is not liable for decisions made by
            insurers, buyers, or third parties based on our reports. Clients should obtain
            independent professional advice where required.
          </p>
          <h2 className="font-display text-lg font-semibold text-[var(--navy)]">
            Contact
          </h2>
          <p>
            Questions:{" "}
            <a href="mailto:hello@spatiofos.com" className="text-[var(--green-dark)]">
              hello@spatiofos.com
            </a>
          </p>
          <p className="text-[var(--muted)] text-xs">
            Summary terms for launch. Obtain formal terms from qualified legal counsel before
            scale.
          </p>
        </div>
      </Section>
    </>
  );
}
