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
  siteDescription,
  siteName,
  siteTitle,
  tiktokUrl,
  websiteUrl,
  whatsappChannelUrl,
} from "@/lib/site";

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    type: "website",
    images: [
      {
        url: "/photo-bio.jpeg",
        width: 818,
        height: 1116,
        alt: "MelyMelow, artiste contemporaine specialisee dans la resine et l'acrylique",
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
        email: `mailto:${contactEmail}`,
        telephone: contactPhone,
        sameAs: [instagramUrl, tiktokUrl, whatsappChannelUrl, websiteUrl],
        knowsAbout: ["Resine", "Acrylique", "Art contemporain", "Abstract art"],
      },
      {
        "@type": "VisualArtwork",
        "@id": `${baseUrl}/#artwork-signature`,
        name: "Signature MelyMelow",
        artMedium: "Resine et acrylique",
        creator: {
          "@id": `${baseUrl}/#artist`,
        },
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
      <PressKitLanding artworks={artworks} />
    </>
  );
}
