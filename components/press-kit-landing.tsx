"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Palette, Sparkles } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { SiteHeader } from "@/components/site-header";
import {
  Globe2,
  InstagramIcon,
  Mail,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/social-icons";
import type { Artwork } from "@/lib/gallery";
import {
  contactEmail,
  contactPhone,
  contactPhoneDisplay,
  contactWhatsApp,
  siteUrl,
} from "@/lib/site";

const socialLinks = {
  instagram: "https://www.instagram.com/melymelow_art/",
  whatsappChannel: "https://whatsapp.com/channel/0029Vb7NNBG5kg7Bf3koQS3Q",
  tiktok: "https://www.tiktok.com/@melymelow",
};

type Lang = "fr" | "en";

const translations = {
  fr: {
    emailSubject: "Demande%20presskit%20MelyMelow",
    hero: {
      kicker: "Presskit artiste",
      tagline1: "Artiste contemporaine spécialisée",
      tagline2: "dans la résine et l’acrylique",
    },
    social: {
      ariaSection: "Liens réseaux sociaux",
      ariaInstagram: "Voir Instagram MelyMelow",
      ariaWhatsApp: "Suivre la chaine WhatsApp MelyMelow",
      ariaTikTok: "Voir TikTok MelyMelow",
      ariaWebsite: "Ouvrir le site web MelyMelow",
    },
    kpisAriaLabel: "Indicateurs",
    kpis: [
      { value: "Paris", label: "base" },
      { value: "Résine", label: "matière signature" },
      { value: "Acrylique", label: "technique principale" },
      { value: "13", label: "ans d’expérience" },
    ],
    bio: {
      kicker: "Bio",
      title: "Autodidacte. Ingénieure. Artiste depuis 2013.",
      paragraphs: [
        "MélyMelOw est une artiste contemporaine autodidacte basée à Paris. Ingénieure de formation, elle développe depuis 2013 une pratique hybride mêlant pastel aquarellable, acrylique et résine époxy.",
        "Chaque composition naît d’un geste libre — spontané, physique — avant que la résine ne fixe les pigments dans leur élan. Son univers puise dans les cultures afro-caribéennes, la spiritualité et les questionnements identitaires.",
      ],
      quote:
        "Dans mon art, la couleur se meut librement jusqu’à ce que la résine fige l’instant.",
      photoBioAlt: "Portrait de MélyMelOw",
      bioDocLabel: "Dossier bio",
    },
    concept: {
      kicker: "Concept",
      title: "Fluide, lumineux, profond.",
      items: [
        "Pastel, acrylique, bombes de peinture — les matières s’accumulent librement jusqu’à trouver leur propre équilibre.",
        "La résine époxy fixe les pigments dans leur élan : brillance, profondeur, instant suspendu dans la matière.",
        "Un univers nourri par le street art, les cultures afro-caribéennes et l’exploration intérieure.",
      ],
    },
    expositions: {
      kicker: "Références",
      title: "Expositions & événements",
      countLabel: (n: number) => `${n} événements`,
    },
    gallery: {
      kicker: "Galerie",
      title: "Tableaux",
      cta: "Voir plus de tableaux",
    },
    contact: {
      kicker: "Contact",
      title: "Demandes presse, expo et acquisition.",
      photoAlt: "MélyMelOw contact",
    },
    footer: {
      description:
        "Artiste contemporaine • Résine • Acrylique. Disponible pour demandes presse, expositions, collaborations et acquisitions.",
      location: "Paris · France",
      navTitle: "Navigation",
      socialsTitle: "Socials",
      contactTitle: "Contact",
      navLinks: [
        { href: "#bio", label: "Bio" },
        { href: "#concept", label: "Concept" },
        { href: "#expositions", label: "Expositions" },
        { href: "#gallery", label: "Galerie" },
        { href: "#contact", label: "Contact" },
      ],
      socialLinks: [
        { href: socialLinks.instagram, label: "Instagram" },
        { href: socialLinks.tiktok, label: "TikTok" },
        { href: socialLinks.whatsappChannel, label: "WhatsApp" },
        { href: siteUrl, label: "Site web" },
      ],
      copyright: "© 2026 MelyMelow Press Kit",
      poweredBy: "Powered by Presskit.Fr",
      switcherLabel: "Langue",
    },
  },
  en: {
    emailSubject: "MelyMelow%20presskit%20enquiry",
    hero: {
      kicker: "Artist Press Kit",
      tagline1: "Contemporary artist specialised",
      tagline2: "in resin and acrylic",
    },
    social: {
      ariaSection: "Social media links",
      ariaInstagram: "View MelyMelow Instagram",
      ariaWhatsApp: "Follow MelyMelow’s WhatsApp channel",
      ariaTikTok: "View MelyMelow TikTok",
      ariaWebsite: "Open MelyMelow website",
    },
    kpisAriaLabel: "Key figures",
    kpis: [
      { value: "Paris", label: "based" },
      { value: "Resin", label: "signature medium" },
      { value: "Acrylic", label: "main technique" },
      { value: "13", label: "years of experience" },
    ],
    bio: {
      kicker: "Bio",
      title: "Self-taught. Engineer. Artist since 2013.",
      paragraphs: [
        "MélyMelOw is a self-taught contemporary artist based in Paris. Trained as an engineer, she has been developing since 2013 a hybrid practice combining watercolour pastel, acrylic and epoxy resin.",
        "Each composition is born from a free gesture — spontaneous, physical — before the resin sets the pigments in motion. Her world draws from Afro-Caribbean cultures, spirituality and questions of identity.",
      ],
      quote: "In my art, colour moves freely until the resin freezes the moment.",
      photoBioAlt: "Portrait of MélyMelOw",
      bioDocLabel: "Bio dossier",
    },
    concept: {
      kicker: "Concept",
      title: "Fluid, luminous, deep.",
      items: [
        "Pastel, acrylic, spray paint — materials accumulate freely until they find their own balance.",
        "Epoxy resin sets the pigments in their momentum: shine, depth, an instant suspended in matter.",
        "A world nourished by street art, Afro-Caribbean cultures and inner exploration.",
      ],
    },
    expositions: {
      kicker: "References",
      title: "Exhibitions & events",
      countLabel: (n: number) => `${n} events`,
    },
    gallery: {
      kicker: "Gallery",
      title: "Paintings",
      cta: "See more artworks",
    },
    contact: {
      kicker: "Contact",
      title: "Press, exhibition and acquisition enquiries.",
      photoAlt: "MélyMelOw contact",
    },
    footer: {
      description:
        "Contemporary artist • Resin • Acrylic. Available for press requests, exhibitions, collaborations and acquisitions.",
      location: "Paris · France",
      navTitle: "Navigation",
      socialsTitle: "Socials",
      contactTitle: "Contact",
      navLinks: [
        { href: "#bio", label: "Bio" },
        { href: "#concept", label: "Concept" },
        { href: "#expositions", label: "Exhibitions" },
        { href: "#gallery", label: "Gallery" },
        { href: "#contact", label: "Contact" },
      ],
      socialLinks: [
        { href: socialLinks.instagram, label: "Instagram" },
        { href: socialLinks.tiktok, label: "TikTok" },
        { href: socialLinks.whatsappChannel, label: "WhatsApp" },
        { href: siteUrl, label: "Website" },
      ],
      copyright: "© 2026 MelyMelow Press Kit",
      poweredBy: "Powered by Presskit.Fr",
      switcherLabel: "Language",
    },
  },
};

const expositions = [
  { year: "2025", name: "Exposition personnelle", location: "Vanves", detail: "18 œuvres — thème des Antilles" },
  { year: "2024", name: "Fête des Arts", location: "Chuelles (45)", detail: "Journée arts & culture pluridisciplinaire" },
  { year: "2022", name: "Concrete Residency", location: "Guadeloupe", detail: "Résidence collective — 10 semaines, 11 œuvres" },
  { year: "2022", name: "Art & Food Africa", location: "Martinique", detail: "5 œuvres — thème de la femme africaine" },
  { year: "2021", name: "Restaurant O'Mango", location: "Paris", detail: "Exposition in situ — 1 mois" },
  { year: "2021", name: "Espace Sorbonne 4", location: "Paris", detail: "Exposition immersive" },
  { year: "2021", name: "Art3F", location: "Paris", detail: "Salon international d'art contemporain — 11 œuvres" },
];

function BgVideo({ src, className }: { src: string; className?: string }) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
      aria-hidden="true"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

type PressKitLandingProps = {
  artworks: Artwork[];
};

export function PressKitLanding({ artworks }: PressKitLandingProps) {
  const [lang, setLang] = useState<Lang>("fr");
  const t = translations[lang];
  const contactEmailHref = `mailto:${contactEmail}?subject=${t.emailSubject}`;

  return (
    <main className="overflow-x-clip bg-[#080607] text-white">
      <SiteHeader />

      <section
        className="relative flex min-h-[76svh] items-center justify-center overflow-hidden pt-16 sm:min-h-[74vh] lg:min-h-[86vh]"
        aria-labelledby="hero-title"
      >
        <BgVideo
          src="/video-hero-melymelow.mp4"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,6,7,0.08),rgba(8,6,7,0.78)),linear-gradient(180deg,rgba(8,6,7,0.2),rgba(8,6,7,0.84))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,200,210,0.16),transparent_34%,transparent_66%,rgba(240,74,166,0.14))]" />

        <SectionReveal className="relative z-10 px-4 text-center sm:px-6">
          <p className="kicker justify-center before:hidden">{t.hero.kicker}</p>
          <h1
            id="hero-title"
            className="display-title mt-5 text-[3.4rem] uppercase leading-[0.9] text-white sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem]"
          >
            MelyMelow
          </h1>
          <p className="mx-auto mt-5 flex max-w-[21rem] flex-col text-balance text-[11px] font-semibold uppercase leading-6 tracking-[0.16em] text-[#f0e8ec] sm:max-w-[42rem] sm:text-base sm:leading-7 sm:tracking-[0.32em]">
            <span>{t.hero.tagline1}</span>
            <span>{t.hero.tagline2}</span>
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.26em] text-[#cfc3bb]">
            Paris
          </p>
        </SectionReveal>
      </section>

      <section
        className="shell border-b border-white/10 py-4"
        aria-label={t.social.ariaSection}
      >
        <SectionReveal className="flex flex-wrap items-center justify-center gap-5 sm:gap-9">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t.social.ariaInstagram}
            className="transition hover:scale-105"
          >
            <InstagramIcon />
          </a>
          <a
            href={socialLinks.whatsappChannel}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t.social.ariaWhatsApp}
            className="transition hover:scale-105"
          >
            <WhatsAppIcon />
          </a>
          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t.social.ariaTikTok}
            className="transition hover:scale-105"
          >
            <TikTokIcon />
          </a>
          <a
            href={siteUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={t.social.ariaWebsite}
            className="inline-flex text-[#18c8d2] transition hover:scale-105"
          >
            <Globe2 className="size-7" />
          </a>
        </SectionReveal>
      </section>

      <section className="shell py-8 sm:py-10" aria-label={t.kpisAriaLabel}>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 lg:grid-cols-4 lg:gap-x-12">
          {t.kpis.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-t border-white/10 pt-4"
            >
              <p className="display-title text-[2rem] uppercase leading-none text-white sm:text-[2.8rem]">
                {item.value}
              </p>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a6e75] sm:text-[11px]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="bio" className="shell py-10 sm:py-14 lg:py-16" aria-labelledby="bio-title">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionReveal>
            <div className="overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/photo-bio.jpeg"
                alt={t.bio.photoBioAlt}
                width={818}
                height={1116}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08} className="min-w-0 space-y-7">
            <p className="kicker">{t.bio.kicker}</p>
            <h2
              id="bio-title"
              className="display-title max-w-[20ch] text-[2.2rem] uppercase leading-[0.94] text-white sm:text-[3.3rem] lg:text-[4rem]"
            >
              {t.bio.title}
            </h2>
            <div className="grid gap-6 border-t border-white/10 pt-6 md:grid-cols-2">
              {t.bio.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[1rem] leading-8 text-[#d0c8c1]">
                  {paragraph}
                </p>
              ))}
            </div>
            <blockquote className="border-l-2 border-[#f04aa6] py-1 pl-5 font-serif text-xl leading-8 text-white sm:text-2xl sm:leading-9">
              {t.bio.quote}
            </blockquote>
            <Link href="/docs/dossier-bio.pdf" className="line-button w-fit" target="_blank">
              {t.bio.bioDocLabel}
              <Download className="size-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <section
        id="concept"
        className="shell py-10 sm:py-14 lg:py-16"
        aria-labelledby="concept-title"
      >
        <SectionReveal className="grid gap-8 border-y border-white/10 py-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="min-w-0">
            <p className="kicker">{t.concept.kicker}</p>
            <h2
              id="concept-title"
              className="display-title mt-5 max-w-[18ch] text-[2.2rem] uppercase leading-[0.94] text-white sm:text-[3.2rem] lg:text-[3.9rem]"
            >
              {t.concept.title}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {t.concept.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                className="border border-white/10 bg-white/[0.035] p-5"
              >
                <div className="mb-6 inline-flex size-10 items-center justify-center border border-white/10 text-[#18c8d2]">
                  {index === 0 ? <Palette className="size-5" /> : <Sparkles className="size-5" />}
                </div>
                <p className="text-sm leading-7 text-[#d0c8c1]">{item}</p>
              </motion.div>
            ))}
          </div>
        </SectionReveal>
      </section>

      <section
        id="expositions"
        className="relative py-10 sm:py-14 lg:py-16"
        aria-labelledby="expositions-title"
      >
        <div className="shell relative">
          <SectionReveal className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
            <div>
              <p className="kicker">{t.expositions.kicker}</p>
              <h2
                id="expositions-title"
                className="display-title mt-5 text-[2.4rem] uppercase leading-none text-white sm:text-[3.5rem]"
              >
                {t.expositions.title}
              </h2>
            </div>
            <p className="hidden shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a6e75] sm:block">
              {t.expositions.countLabel(expositions.length)}
            </p>
          </SectionReveal>

          <div className="border-t border-white/10">
            {expositions.map((item, i) => (
              <motion.div
                key={item.name + item.year}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
                className="group relative border-b border-white/10 transition-colors duration-200 hover:border-white/20"
              >
                <div className="absolute inset-y-0 left-0 w-[2px] scale-y-0 bg-[#f04aa6] transition-transform duration-200 origin-top group-hover:scale-y-100" />
                <div className="grid grid-cols-[3rem_1fr] gap-x-4 py-5 pl-5 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-x-8 sm:py-4 lg:grid-cols-[4rem_1fr_11rem_18rem]">
                  <span className="display-title text-[0.8rem] leading-none text-[#f04aa6] sm:text-[0.9rem]">
                    {item.year}
                  </span>
                  <span className="display-title text-[1.05rem] uppercase leading-none text-white sm:text-[1.2rem]">
                    {item.name}
                  </span>
                  <span className="col-start-2 mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#18c8d2] sm:col-start-auto sm:mt-0 sm:text-right">
                    {item.location}
                  </span>
                  <span className="col-start-2 mt-1 text-[11px] leading-5 text-[#cfc3bb] sm:col-start-auto sm:mt-0 lg:text-right">
                    {item.detail}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="shell py-10 sm:py-14 lg:py-16"
        aria-labelledby="gallery-title"
      >
        <SectionReveal className="mb-8 sm:mb-10">
          <div>
            <p className="kicker">{t.gallery.kicker}</p>
            <h2
              id="gallery-title"
              className="display-title mt-5 text-[2.4rem] uppercase leading-none text-white sm:text-[3.5rem]"
            >
              {t.gallery.title}
            </h2>
          </div>
        </SectionReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {artworks.map((artwork, index) => (
            <motion.article
              key={artwork.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
              className="group overflow-hidden border border-white/10 bg-white/[0.035]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-black/30">
                <Image
                  src={artwork.image}
                  alt={artwork.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="border-t border-white/10 p-4">
                <h3 className="display-title text-2xl uppercase text-white">
                  {artwork.title}
                </h3>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#cfc3bb]">
                  {artwork.dimensions}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        <SectionReveal className="mt-8 flex justify-center">
          <a
            href="https://www.melymelow.art/accueil"
            target="_blank"
            rel="noreferrer noopener"
            className="color-button"
          >
            {t.gallery.cta}
            <ArrowUpRight className="size-4 shrink-0" />
          </a>
        </SectionReveal>
      </section>

      <section
        id="contact"
        className="shell pb-12 pt-8 sm:pb-16 lg:pb-20"
        aria-labelledby="contact-title"
      >
        <SectionReveal className="border border-white/10 bg-[linear-gradient(135deg,rgba(24,200,210,0.08),rgba(255,255,255,0.025)_44%,rgba(240,74,166,0.08))] p-5 sm:p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
            <div className="relative min-h-[22rem] overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/photo-contact.jpeg"
                alt={t.contact.photoAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex min-w-0 flex-col justify-center space-y-7">
              <div>
                <p className="kicker">{t.contact.kicker}</p>
                <h2
                  id="contact-title"
                  className="display-title mt-5 max-w-[16ch] text-[2.4rem] uppercase leading-none text-white sm:text-[3.8rem] lg:text-[4.6rem]"
                >
                  {t.contact.title}
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <a className="line-button justify-between" href={contactEmailHref}>
                  {contactEmail}
                  <Mail className="size-4 shrink-0" />
                </a>
                <a
                  className="line-button justify-between"
                  href={contactWhatsApp}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {contactPhoneDisplay}
                  <WhatsAppIcon className="size-4 shrink-0" />
                </a>
                <a
                  className="line-button justify-between"
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  @melymelow_art
                  <InstagramIcon className="size-4 shrink-0" />
                </a>
                <a
                  className="color-button justify-between"
                  href={siteUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  melymelow.art
                  <ArrowUpRight className="size-4 shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      <footer className="border-t border-white/10 bg-black px-4 py-7 text-white md:px-6 md:py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4 md:grid-cols-[1.25fr_0.85fr_0.85fr_1fr] md:gap-10">
          <div className="col-span-2 sm:col-span-1">
            <Link
              href="/"
              className="display-title text-xl uppercase tracking-[0.16em] text-white md:text-2xl md:tracking-[0.18em]"
            >
              MelyMelow
            </Link>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/58 sm:max-w-none">
              {t.footer.description}
            </p>
            <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35">
              {t.footer.location}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f04aa6] md:tracking-[0.24em]">
              {t.footer.navTitle}
            </div>
            <div className="mt-3 grid gap-2 text-sm text-white/68">
              {t.footer.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f04aa6] md:tracking-[0.24em]">
              {t.footer.socialsTitle}
            </div>
            <div className="mt-3 grid gap-2 text-sm text-white/68">
              {t.footer.socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f04aa6] md:tracking-[0.24em]">
              {t.footer.contactTitle}
            </div>
            <div className="mt-3 grid gap-2 text-sm text-white/68">
              <a
                href={contactEmailHref}
                className="break-all transition hover:text-white"
              >
                {contactEmail}
              </a>
              <a
                href={`tel:${contactPhone}`}
                className="transition hover:text-white"
              >
                {contactPhoneDisplay}
              </a>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                {t.footer.switcherLabel}
              </span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setLang("fr")}
                  aria-label="Français"
                  aria-pressed={lang === "fr"}
                  className={`flex h-7 w-9 items-center justify-center rounded-sm border text-base transition ${
                    lang === "fr"
                      ? "border-[#f04aa6] bg-[#f04aa6]/10"
                      : "border-white/10 opacity-40 hover:opacity-70"
                  }`}
                >
                  🇫🇷
                </button>
                <button
                  onClick={() => setLang("en")}
                  aria-label="English"
                  aria-pressed={lang === "en"}
                  className={`flex h-7 w-9 items-center justify-center rounded-sm border text-base transition ${
                    lang === "en"
                      ? "border-[#f04aa6] bg-[#f04aa6]/10"
                      : "border-white/10 opacity-40 hover:opacity-70"
                  }`}
                >
                  🇬🇧
                </button>
              </div>
            </div>

            <div className="mt-4 text-[10px] uppercase tracking-[0.18em] text-white/30">
              {t.footer.copyright}
            </div>
            <a
              href="https://presskit.fr"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-2 inline-flex text-[10px] uppercase tracking-[0.18em] text-white/30 transition hover:text-white/60"
            >
              {t.footer.poweredBy}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
