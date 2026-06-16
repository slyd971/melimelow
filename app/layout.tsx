import type { Metadata } from "next";
import "./globals.css";
import { siteDescription, siteName, siteTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://www.melymelow.art"),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName,
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/photo-bio.jpeg",
        width: 818,
        height: 1116,
        alt: "MélyMelOw, artiste contemporaine spécialisée dans la résine et l'acrylique — Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/photo-bio.jpeg"],
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
