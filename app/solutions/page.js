import SolutionsGrid from "@/components/home/SolutionsGrid";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Solutions | SpatioFos",
  description:
    "Roof Intelligence, Aviation Intelligence, Infrastructure Intelligence, and the Asset Intelligence Platform — inspection intelligence for every scale.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        label="Solutions"
        title="Built for every scale of asset"
        subtitle="From a single residential roof to enterprise infrastructure portfolios."
      />
      <SolutionsGrid />
    </>
  );
}
