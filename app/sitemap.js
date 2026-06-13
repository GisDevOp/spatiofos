import { sitemapRoutes } from "@/lib/content";

export default function sitemap() {
  const baseUrl = "https://spatiofos.com.au";

  return sitemapRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("roof-intelligence") ? 0.9 : 0.7,
  }));
}
