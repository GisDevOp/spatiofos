import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import ProblemGrid from "@/components/home/ProblemGrid";
import WorkflowSteps from "@/components/home/WorkflowSteps";
import OutcomesStrip from "@/components/home/OutcomesStrip";
import SolutionsGrid from "@/components/home/SolutionsGrid";
import ComparisonTable from "@/components/home/ComparisonTable";
import PricingGrid from "@/components/home/PricingGrid";
import IndustriesGrid from "@/components/home/IndustriesGrid";
import LocationsGrid from "@/components/home/LocationsGrid";
import LeadScoreSection from "@/components/home/LeadScoreSection";
import ContactPaths from "@/components/home/ContactPaths";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <ProblemGrid />
      <WorkflowSteps />
      <OutcomesStrip />
      <SolutionsGrid />
      <ComparisonTable />
      <PricingGrid />
      <IndustriesGrid />
      <LocationsGrid />
      <LeadScoreSection />
      <ContactPaths />
    </>
  );
}
