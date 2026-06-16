import type { Metadata } from "next";
import "./globals.css";
import { siteDescription, siteName, siteTitle } from "@/lib/site";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL("https://www.melymelow.art"),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    siteName,
    type: "website",
    locale: "fr_FR",
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
