import Link from "next/link";
import Section from "@/components/ui/Section";
import { pricingTiers } from "@/lib/content";

export default function PricingGrid({ showNote = true }) {
  return (
    <Section id="pricing" variant="light">
      <p className="label">Pricing</p>
      <h2 className="section-title">Transparent pricing. No surprises.</h2>
      <p className="section-sub">
        Residential inspections are live and available now at our launch offer
        rate. Commercial, enterprise, and subscription tiers open for expressions
        of interest.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4.5 mt-10">
        {pricingTiers.map((tier) => (
          <div
            key={tier.id}
            className={`bg-white border rounded-[var(--radius-lg)] p-7 ${
              tier.featured
                ? "border-2 border-[var(--green)] shadow-[0_6px_30px_rgba(59,191,90,0.12)]"
                : "border-[#E2EAF3]"
            } ${tier.status === "coming-soon" ? "opacity-75" : ""}`}
          >
            {tier.status === "active" ? (
              <div className="inline-flex items-center gap-1.5 bg-[#FFF3CD] border border-[#FFD96650] text-[#856404] text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-3">
                🎉 Launch Offer — 50% Off
              </div>
            ) : (
              <div className="inline-flex items-center gap-1.5 bg-[var(--offwhite)] border border-[#DDE5EE] text-[var(--slate)] text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-3">
                🔒 Coming Soon
              </div>
            )}
            <div className="text-[11px] font-semibold tracking-wider uppercase text-[var(--slate)] mb-2">
              {tier.tier}
            </div>
            {tier.status === "active" ? (
              <>
                <div className="text-[13px] text-[var(--muted)] line-through mb-0.5">
                  Was ${tier.standardPrice}
                </div>
                <div className="font-display text-[32px] font-bold text-[var(--navy)] leading-none">
                  <sup className="text-base align-super">$</sup>
                  {tier.launchPrice}
                </div>
                <div className="text-xs text-[var(--muted)] mt-0.5">
                  {tier.period}
                </div>
                <div className="inline-block text-[11px] font-semibold text-[var(--green-dark)] bg-[var(--green-pale)] px-2 py-0.5 rounded-full mt-1">
                  You save ${tier.savings}
                </div>
              </>
            ) : (
              <>
                <div className="font-display text-[22px] font-bold text-[var(--slate)]">
                  {tier.priceLabel}
                </div>
                <div className="text-xs text-[var(--muted)] mt-0.5">
                  {tier.period}
                </div>
              </>
            )}
            <p className="text-[13px] text-[var(--slate)] my-4 leading-relaxed">
              {tier.description}
            </p>
            <ul className="list-none border-t border-[#EEF3F8] pt-4">
              {tier.features.map((f) => (
                <li
                  key={f}
                  className="text-[13px] text-[var(--slate)] py-1.5 flex gap-2 items-start"
                >
                  <span className="text-[var(--green-dark)] font-bold text-xs mt-0.5 shrink-0">
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link
              href={tier.ctaHref}
              className={`block w-full mt-6 py-2.5 rounded-[var(--radius-sm)] text-sm font-semibold text-center no-underline transition-opacity hover:opacity-85 ${
                tier.status === "active"
                  ? "bg-[var(--green)] text-white"
                  : "bg-transparent text-[var(--navy)] border-[1.5px] border-[#CBD5E0]"
              }`}
            >
              {tier.cta}
            </Link>
            {tier.status === "active" && (
              <p className="text-[11px] text-[#856404] mt-1.5 font-medium">
                ⏱ Launch pricing available to first 50 bookings
              </p>
            )}
          </div>
        ))}
      </div>
      {showNote && (
        <p className="text-center text-[13px] text-[var(--slate)] mt-8">
          Enterprise and government pricing available on request. All inspections
          include a sample report —{" "}
          <Link href="/contact" className="text-[var(--green-dark)] font-semibold">
            contact us
          </Link>{" "}
          to see one before booking.
        </p>
      )}
    </Section>
  );
}
