import type { Metadata } from "next";
import "./globals.css";
import {
  siteDescription,
  siteName,
  siteOgImage,
  siteOgImageHeight,
  siteOgImageWidth,
  siteTitle,
  siteUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
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
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: siteOgImage,
        alt: "MélyMelOw, artiste contemporaine résine et acrylique à Paris",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
