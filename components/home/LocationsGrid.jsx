import Link from "next/link";
import Section from "@/components/ui/Section";
import { locations } from "@/lib/content";

export default function LocationsGrid() {
  return (
    <Section id="locations" variant="dark">
      <p className="label label--light">Service areas</p>
      <h2 className="section-title section-title--light">
        Roof inspections across South East Queensland
      </h2>
      <p className="section-sub section-sub--light">
        Based in Brisbane. Operating across the full SEQ corridor with
        same-week availability.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-8">
        {locations.map((loc) => (
          <Link
            key={loc.slug}
            href={`/locations/${loc.slug}`}
            className="bg-white/[0.05] border border-[var(--border-navy)] rounded-[var(--radius-md)] p-4 text-center no-underline transition-all duration-200 hover:bg-[rgba(59,191,90,0.1)] hover:border-[rgba(59,191,90,0.4)] hover:-translate-y-0.5 focus-ring"
          >
            <div className="text-lg text-[var(--green)] mb-1.5" aria-hidden="true">
              📍
            </div>
            <div className="text-sm font-semibold text-white">{loc.name}</div>
            <div className="text-[11px] text-white/40 mt-0.5">{loc.sub}</div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
