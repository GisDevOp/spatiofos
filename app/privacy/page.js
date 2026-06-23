import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "Privacy Policy | SpatioFos",
  description: "How SpatioFos collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero label="Legal" title="Privacy Policy" subtitle="Last updated: June 2026" />
      <Section>
        <div className="max-w-2xl prose prose-sm text-[var(--slate)] space-y-4 text-sm leading-relaxed">
          <p>
            SpatioFos Pty Ltd (&quot;SpatioFos&quot;, &quot;we&quot;, &quot;us&quot;) respects your privacy.
            This policy describes how we handle personal information when you use spatiofos.com
            and our inspection services.
          </p>
          <h2 className="font-display text-lg font-semibold text-[var(--navy)]">
            Information we collect
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact details (name, email, phone if provided)</li>
            <li>Property address and roof details for inspections or score registration</li>
            <li>Technical data (IP address, browser type) via analytics if enabled</li>
          </ul>
          <h2 className="font-display text-lg font-semibold text-[var(--navy)]">
            How we use it
          </h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>To respond to enquiries and deliver inspection services</li>
            <li>To send reports and service-related communications</li>
            <li>To improve our website and services</li>
          </ul>
          <h2 className="font-display text-lg font-semibold text-[var(--navy)]">
            Disclosure
          </h2>
          <p>
            We do not sell your personal information. We may share data with service providers
            (e.g. email delivery, hosting) who assist our operations, subject to confidentiality
            obligations.
          </p>
          <h2 className="font-display text-lg font-semibold text-[var(--navy)]">
            Your rights
          </h2>
          <p>
            You may request access to or correction of your personal information by contacting{" "}
            <a href="mailto:hello@spatiofos.com" className="text-[var(--green-dark)]">
              hello@spatiofos.com
            </a>
            .
          </p>
          <p className="text-[var(--muted)] text-xs">
            This is a summary policy for launch. Engage qualified legal counsel for a full
            Privacy Policy aligned to the Australian Privacy Act.
          </p>
        </div>
      </Section>
    </>
  );
}
