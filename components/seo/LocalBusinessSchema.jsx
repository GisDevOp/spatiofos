export default function LocalBusinessSchema({ location, slug }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SpatioFos",
    description: `AI-powered roof inspection in ${location}`,
    url: `https://spatiofos.com.au/locations/${slug}`,
    areaServed: {
      "@type": "City",
      name: location,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: location,
      addressRegion: "QLD",
      addressCountry: "AU",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
