import { Inter, Space_Grotesk } from "next/font/google";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import BackToTop from "@/components/layout/BackToTop";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import SkipLink from "@/components/ui/SkipLink";
import { site } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: "SpatioFos — Spatial Intelligence. Real Impact.",
  description: site.description,
  openGraph: {
    title: "SpatioFos — AI-Assisted Roof Inspection Queensland",
    description: site.description,
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <GoogleAnalytics />
        <SkipLink />
        <SiteHeader />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
        <MobileCtaBar />
        <BackToTop />
      </body>
    </html>
  );
}
