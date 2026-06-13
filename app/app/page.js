import ComingSoonPage from "@/components/ui/ComingSoonPage";

export const metadata = {
  title: "Client Portal | SpatioFos — Coming Soon",
  description:
    "SpatioFos client portal for inspection reports, defect tracking, and asset registers. Launching in a future release.",
};

export default function ClientPortalPage() {
  return (
    <ComingSoonPage
      title="Client Portal"
      description="Authenticated dashboard for reports library, defect timelines, and asset registers. Phase 1 MVP launching 6–9 months post-launch."
      ctaLabel="Register Interest"
    />
  );
}
