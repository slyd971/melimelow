export const siteName = "MelyMelow";
export const brandSignature = "MelyMelow Art";
export const siteTitle =
  "MelyMelow | Presskit artiste contemporaine resin art & acrylic";
export const siteDescription =
  "Presskit de MelyMelow, artiste contemporaine a Paris specialisee dans la resine et l'acrylique, entre couleur libre, mouvement et instant fige.";
export const siteUrl = "https://www.melymelow.art/";
export const websiteUrl = siteUrl;
export const siteOgImage = "/photo-bio.jpeg";
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
