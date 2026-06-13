import Section from "@/components/ui/Section";
import RoofScoreForm from "@/components/forms/RoofScoreForm";
import { roofScoreBenefits } from "@/lib/content";

export default function LeadScoreSection() {
  return (
    <Section id="freescore" variant="green">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="label label--light">Free assessment</p>
          <h2 className="section-title section-title--light">
            Get your free Roof Intelligence Score
          </h2>
          <p className="section-sub section-sub--light">
            Tell us about your property and we&apos;ll provide a preliminary
            assessment of your roof&apos;s condition and inspection priority — at
            no cost, no obligation.
          </p>
          <ul className="mt-6 list-none flex flex-col gap-2.5">
            {roofScoreBenefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-2.5 text-sm text-white/75"
              >
                <span className="bg-white/20 rounded-full w-[22px] h-[22px] flex items-center justify-center text-xs text-white font-bold shrink-0">
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <RoofScoreForm />
      </div>
    </Section>
  );
}
