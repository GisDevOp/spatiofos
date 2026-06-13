import LocationPage from "@/components/locations/LocationPage";
import { locationDetails, locationMeta } from "@/lib/content";

const slug = "sunshine-coast";
const meta = locationMeta(slug);

export const metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [meta.keyword],
};

export default function SunshineCoastPage() {
  return <LocationPage slug={slug} details={locationDetails[slug]} />;
}
