import RoofScoreForm from "@/components/forms/RoofScoreForm";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { roofScoreBenefits } from "@/lib/content";

export const metadata = {
  title: "Free Roof Intelligence Score | SpatioFos Brisbane",
  description:
    "Register for a preliminary roof condition assessment for your SEQ property. No obligation. Roof Intelligence Score launching soon.",
  keywords: ["free roof assessment Brisbane", "roof intelligence score"],
};

export default function GetRoofScorePage() {
  return (
    <>
      <PageHero
        label="Free Assessment"
        title="Get your free Roof Intelligence Score"
        subtitle="Register your property for a preliminary assessment when the Roof Intelligence Score launches — at no cost, no obligation."
      />
      <Section variant="light">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          <div>
            <h2 className="section-title text-xl mb-4">What you&apos;ll receive</h2>
            <ul className="list-none flex flex-col gap-3">
              {roofScoreBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-2.5 text-sm text-[var(--slate)]"
                >
                  <span className="bg-[var(--green-pale)] rounded-full w-[22px] h-[22px] flex items-center justify-center text-xs text-[var(--green-dark)] font-bold shrink-0">
                    ✓
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <RoofScoreForm compact />
        </div>
      </Section>
    </>
  );
}
