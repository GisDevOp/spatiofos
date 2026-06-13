import LocationPage from "@/components/locations/LocationPage";
import { locationDetails, locationMeta } from "@/lib/content";

const slug = "brisbane";
const meta = locationMeta(slug);

export const metadata = {
  title: meta.title,
  description: meta.description,
  keywords: [meta.keyword],
};

export default function BrisbanePage() {
  return <LocationPage slug={slug} details={locationDetails[slug]} />;
}
