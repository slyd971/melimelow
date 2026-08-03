import type { Metadata } from "next";
import Script from "next/script";
import { PressKitLanding } from "@/components/press-kit-landing";
import { artworks } from "@/lib/gallery";
import {
  brandSignature,
  contactEmail,
  contactPhone,
  getBaseUrl,
  instagramUrl,
  siteOgImage,
  siteOgImageHeight,
  siteOgImageWidth,
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
  tiktokUrl,
  websiteUrl,
  whatsappChannelUrl,
} from "@/lib/site";

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: siteUrl,
    languages: {
      fr: siteUrl,
      en: `${siteUrl}en`,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: siteOgImage,
        width: siteOgImageWidth,
        height: siteOgImageHeight,
        alt: "MélyMelOw, artiste contemporaine résine et acrylique à Paris",
        type: "image/jpeg",
      },
    ],
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: siteName,
        description: siteDescription,
        inLanguage: "fr-FR",
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#artist`,
        name: siteName,
        alternateName: brandSignature,
        url: websiteUrl,
        image: `${baseUrl}/photo-bio.jpeg`,
        jobTitle: "Artiste contemporaine",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Paris",
          addressCountry: "FR",
        },
        email: contactEmail,
        telephone: contactPhone,
        sameAs: [instagramUrl, tiktokUrl, whatsappChannelUrl],
        knowsAbout: ["Résine époxy", "Acrylique", "Art contemporain", "Mixed media", "Cultures afro-caribéennes"],
      },
    ],
  };

  return (
    <>
      <Script
        id="melymelow-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PressKitLanding artworks={artworks} lang="fr" />
    </>
  );
}
