import IndustriesGrid from "@/components/home/IndustriesGrid";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Industries | SpatioFos",
  description:
    "Roof and asset inspection intelligence for residential, strata, commercial, insurance, councils, utilities, and aviation sectors in Queensland.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        label="Industries"
        title="Serving every sector with built assets"
        subtitle="Workflows tailored to documentation requirements, risk profiles, and reporting standards of each industry."
      />
      <IndustriesGrid />
    </>
  );
}
