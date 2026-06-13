import Section from "@/components/ui/Section";
import { comparisonRows } from "@/lib/content";

function Cell({ value }) {
  return value ? (
    <span className="text-[var(--green-dark)] font-bold text-[15px]">✓</span>
  ) : (
    <span className="text-[#CCD6E0] text-[15px]">—</span>
  );
}

export default function ComparisonTable({ extended = false }) {
  return (
    <Section id="why" variant="light">
      <p className="label">Why SpatioFos</p>
      <h2 className="section-title">Not just a drone operator</h2>
      <p className="section-sub">
        We combine geospatial intelligence, AI, and asset analytics. Capabilities
        no traditional inspector or generic drone provider can offer.
      </p>
      {extended && (
        <p className="text-sm text-[var(--slate)] mt-6 max-w-2xl leading-relaxed">
          SpatioFos was founded at the intersection of GIS, drone operations, and
          enterprise architecture — a combination uncommon in the inspection
          industry. We&apos;re building the spatial infrastructure intelligence
          platform for the built environment, starting with roof intelligence in
          South East Queensland.
        </p>
      )}
      <div className="overflow-x-auto mt-8">
        <table className="w-full border-collapse text-[13px] min-w-[500px]" role="table" aria-label="Capability comparison">
          <thead>
            <tr>
              <th className="text-left text-[11px] font-semibold text-[var(--slate)] px-4 py-2.5 border-b-[1.5px] border-[#E2EAF3]">
                Capability
              </th>
              <th className="text-left text-[11px] font-semibold text-[var(--slate)] px-4 py-2.5 border-b-[1.5px] border-[#E2EAF3]">
                Traditional Inspector
              </th>
              <th className="text-left text-[11px] font-semibold text-[var(--slate)] px-4 py-2.5 border-b-[1.5px] border-[#E2EAF3]">
                Generic Drone Operator
              </th>
              <th className="text-left text-[11px] font-semibold text-[var(--green-dark)] px-4 py-2.5 border-b-[1.5px] border-[#E2EAF3]">
                SpatioFos
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.feature}>
                <td className="px-4 py-2.5 border-b border-[#EEF3F8] text-[var(--slate)]">
                  {row.feature}
                </td>
                <td className="px-4 py-2.5 border-b border-[#EEF3F8]">
                  <Cell value={row.traditional} />
                </td>
                <td className="px-4 py-2.5 border-b border-[#EEF3F8]">
                  <Cell value={row.drone} />
                </td>
                <td className="px-4 py-2.5 border-b border-[#EEF3F8] bg-[rgba(59,191,90,0.04)]">
                  <Cell value={row.spatiofos} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
