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
  siteUrl,
  tiktokUrl,
  whatsappChannelUrl,
  websiteUrl,
} from "@/lib/site";

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: "MelyMelow | Artist Press Kit — Resin & Acrylic",
  description:
    "Press kit for MélyMelOw, a self-taught contemporary artist based in Paris, specialised in epoxy resin and acrylic. Exhibitions since 2021.",
  alternates: {
    canonical: `${siteUrl}en`,
    languages: {
      fr: siteUrl,
      en: `${siteUrl}en`,
    },
  },
  openGraph: {
    title: "MelyMelow | Artist Press Kit — Resin & Acrylic",
    description:
      "Press kit for MélyMelOw, a self-taught contemporary artist based in Paris, specialised in epoxy resin and acrylic. Exhibitions since 2021.",
    url: `${siteUrl}en`,
    type: "website",
    locale: "en_GB",
    images: [
      {
        url: siteOgImage,
        width: siteOgImageWidth,
        height: siteOgImageHeight,
        alt: "MélyMelOw, contemporary resin and acrylic artist in Paris",
        type: "image/jpeg",
      },
    ],
  },
};

export default function HomeEn() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "MelyMelow",
        description:
          "Press kit for MélyMelOw, a self-taught contemporary artist based in Paris, specialised in epoxy resin and acrylic.",
        inLanguage: "en-GB",
      },
      {
        "@type": "Person",
        "@id": `${baseUrl}/#artist`,
        name: "MelyMelow",
        alternateName: brandSignature,
        url: websiteUrl,
        image: `${baseUrl}/photo-bio.jpeg`,
        jobTitle: "Contemporary artist",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Paris",
          addressCountry: "FR",
        },
        email: contactEmail,
        telephone: contactPhone,
        sameAs: [instagramUrl, tiktokUrl, whatsappChannelUrl],
        knowsAbout: ["Epoxy resin", "Acrylic", "Contemporary art", "Mixed media", "Afro-Caribbean cultures"],
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
      <PressKitLanding artworks={artworks} lang="en" />
    </>
  );
}
