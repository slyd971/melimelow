export const siteName = "MelyMelow";
export const brandSignature = "MélyMelOw Art";
export const siteTitle =
  "MelyMelow | Presskit artiste — Résine & Acrylique";
export const siteDescription =
  "Presskit de MélyMelOw, artiste contemporaine à Paris, entre résine époxy, acrylique et cultures afro-caribéennes.";
export const siteUrl = "https://presskit.melymelow.art/";
export const websiteUrl = siteUrl;
export const siteOgImage = `${siteUrl}og-image.jpeg`;
export const siteOgImageWidth = 1200;
export const siteOgImageHeight = 630;
export const contactEmail = "contact@melymelow.art";
export const contactPhone = "+33624828064";
export const contactPhoneDisplay = "+33 6 24 82 80 64";
export const contactWhatsApp = "https://wa.me/33624828064";
export const instagramUrl = "https://www.instagram.com/melymelow_art/";
export const tiktokUrl = "https://www.tiktok.com/@melymelow";
export const whatsappChannelUrl =
  "https://whatsapp.com/channel/0029Vb7NNBG5kg7Bf3koQS3Q";

function normalizeUrl(value: string) {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `https://${value}`;
}

export function getBaseUrl() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL;

  return normalizeUrl(envUrl || siteUrl);
}
