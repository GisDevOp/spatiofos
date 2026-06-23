import PricingGrid from "@/components/home/PricingGrid";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Pricing | SpatioFos Roof Inspections",
  description:
    "Transparent roof inspection pricing for South East Queensland. Launch offer: Residential Essential $199, Premium $349.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        label="Pricing"
        title="Transparent pricing. No surprises."
        subtitle="Residential inspections available now at launch pricing. Commercial and platform tiers opening soon."
      />
      <PricingGrid showNote />
    </>
  );
}
