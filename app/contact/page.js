import ContactPaths from "@/components/home/ContactPaths";
import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Contact | SpatioFos",
  description:
    "Book a roof inspection, request a platform demo, or get a sample report. Serving South East Queensland.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Ready to book or have a question?"
        subtitle="We respond to all enquiries within one business day."
      />
      <ContactPaths />
    </>
  );
}
