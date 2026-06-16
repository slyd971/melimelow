"use client";

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
  contactPhoneDisplay,
  contactWhatsApp,
  siteUrl,
} from "@/lib/site";

const socialLinks = {
  instagram: "https://www.instagram.com/melymelow_art/",
  whatsappChannel: "https://whatsapp.com/channel/0029Vb7NNBG5kg7Bf3koQS3Q",
  tiktok: "https://www.tiktok.com/@melymelow",
};

const contactEmailHref = `mailto:${contactEmail}?subject=Demande%20presskit%20MelyMelow`;

const kpis = [
  { value: "Paris", label: "base artistique" },
  { value: "Résine", label: "matière signature" },
  { value: "Acrylique", label: "couleur en mouvement" },
  { value: "4", label: "oeuvres presskit" },
];

const bioParagraphs = [
  "MelyMelow est une artiste contemporaine basée à Paris, spécialisée dans la résine et l'acrylique. Son travail explore la couleur comme une matière vivante, fluide et intuitive.",
  "Chaque composition naît d'un mouvement libre, puis se stabilise dans la transparence et la profondeur de la résine. Ses œuvres cherchent l'équilibre entre énergie, féminité, symbole et instant suspendu.",
];

const conceptItems = [
  "Des couleurs qui circulent, se confrontent et trouvent leur propre rythme.",
  "Une finition résine qui donne profondeur, brillance et sensation d'instant figé.",
  "Une approche contemporaine, sensible et graphique, pensée pour dialoguer avec l'espace.",
];

const expositions = [
  {
    year: "2025",
    items: [
      { name: "Exposition personnelle", location: "Vanves", detail: "18 œuvres — thème des Antilles" },
      { name: "Séries autour des Antilles", location: "Vanves", detail: "18 œuvres exposées" },
    ],
  },
  {
    year: "2024",
    items: [
      { name: "Fête des Arts", location: "Chuelles (45)", detail: "Festival arts & culture" },
    ],
  },
  {
    year: "2022",
    items: [
      { name: "Concrete Residency", location: "Guadeloupe", detail: "Résidence artistique collective — 10 semaines, 11 œuvres" },
      { name: "Art & Food Africa", location: "Martinique", detail: "5 œuvres — thème de la femme africaine" },
    ],
  },
  {
    year: "2021",
    items: [
      { name: "Art3F", location: "Paris", detail: "Salon d’art contemporain — 11 œuvres" },
      { name: "Espace Sorbonne 4", location: "Paris", detail: "Exposition avec QR codes de prose" },
      { name: "Restaurant O’Mango", location: "Paris", detail: "Exposition in situ — 1 mois" },
    ],
  },
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
  return (
    <main className="overflow-x-clip bg-[#080607] text-white">
      <SiteHeader />

      <section
        className="relative flex min-h-[76svh] items-center justify-center overflow-hidden pt-16 sm:min-h-[74vh] lg:min-h-[86vh]"
        aria-labelledby="hero-title"
      >
        <BgVideo
          src="/video-hero-melimelow.mp4"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,6,7,0.08),rgba(8,6,7,0.78)),linear-gradient(180deg,rgba(8,6,7,0.2),rgba(8,6,7,0.84))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,200,210,0.16),transparent_34%,transparent_66%,rgba(240,74,166,0.14))]" />

        <SectionReveal className="relative z-10 px-4 text-center sm:px-6">
          <p className="kicker justify-center before:hidden">Presskit artiste</p>
          <h1
            id="hero-title"
            className="display-title mt-5 text-[3.4rem] uppercase leading-[0.9] text-white sm:text-[6rem] md:text-[7.5rem] lg:text-[9rem]"
          >
            MelyMelow
          </h1>
          <p className="mx-auto mt-5 flex max-w-[21rem] flex-col text-balance text-[11px] font-semibold uppercase leading-6 tracking-[0.16em] text-[#f0e8ec] sm:max-w-[42rem] sm:text-base sm:leading-7 sm:tracking-[0.32em]">
            <span>Artiste contemporaine spécialisée</span>
            <span>dans la résine et l&apos;acrylique</span>
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.26em] text-[#cfc3bb]">
            Paris
          </p>
        </SectionReveal>
      </section>

      <section
        className="shell border-b border-white/10 py-4"
        aria-label="Liens réseaux sociaux"
      >
        <SectionReveal className="flex flex-wrap items-center justify-center gap-5 sm:gap-9">
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Voir Instagram MelyMelow"
            className="transition hover:scale-105"
          >
            <InstagramIcon />
          </a>
          <a
            href={socialLinks.whatsappChannel}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Suivre la chaine WhatsApp MelyMelow"
            className="transition hover:scale-105"
          >
            <WhatsAppIcon />
          </a>
          <a
            href={socialLinks.tiktok}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Voir TikTok MelyMelow"
            className="transition hover:scale-105"
          >
            <TikTokIcon />
          </a>
          <a
            href={siteUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Ouvrir le site web MelyMelow"
            className="inline-flex text-[#18c8d2] transition hover:scale-105"
          >
            <Globe2 className="size-7" />
          </a>
        </SectionReveal>
      </section>

      <section className="shell py-8 sm:py-10" aria-label="Indicateurs">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:gap-x-16 sm:gap-y-8">
          {kpis.map((item, index) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 16 }}
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
                alt="Portrait de MélyMelOw"
                width={818}
                height={1116}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.08} className="min-w-0 space-y-7">
            <p className="kicker">Bio</p>
            <h2
              id="bio-title"
              className="display-title max-w-[20ch] text-[2.2rem] uppercase leading-[0.94] text-white sm:text-[3.3rem] lg:text-[4rem]"
            >
              La couleur en mouvement, l&apos;instant figé dans la résine.
            </h2>
            <div className="grid gap-6 border-t border-white/10 pt-6 md:grid-cols-2">
              {bioParagraphs.map((paragraph) => (
                <p key={paragraph} className="text-[1rem] leading-8 text-[#d0c8c1]">
                  {paragraph}
                </p>
              ))}
            </div>
            <blockquote className="border-l-2 border-[#f04aa6] py-1 pl-5 font-serif text-xl leading-8 text-white sm:text-2xl sm:leading-9">
              Dans mon art, la couleur se meut librement jusqu&apos;à ce que la
              résine fige l&apos;instant.
            </blockquote>
            <Link href="/docs/dossier-bio.pdf" className="line-button w-fit" target="_blank">
              Dossier bio
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
            <p className="kicker">Concept</p>
            <h2
              id="concept-title"
              className="display-title mt-5 max-w-[18ch] text-[2.2rem] uppercase leading-[0.94] text-white sm:text-[3.2rem] lg:text-[3.9rem]"
            >
              Fluide, lumineux, profond.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {conceptItems.map((item, index) => (
              <motion.div
                key={item}
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
        className="shell py-10 sm:py-14 lg:py-16"
        aria-labelledby="expositions-title"
      >
        <SectionReveal className="border-t border-white/10 pt-10">
          <p className="kicker">Références</p>
          <h2
            id="expositions-title"
            className="display-title mt-5 text-[2.4rem] uppercase leading-none text-white sm:text-[3.5rem]"
          >
            Expositions & événements
          </h2>
        </SectionReveal>

        <div className="mt-10 space-y-8">
          {expositions.map((group, gi) => (
            <SectionReveal key={group.year} delay={gi * 0.06}>
              <div className="grid gap-4 sm:grid-cols-[6rem_1fr]">
                <p className="display-title text-[1.1rem] uppercase leading-none text-[#f04aa6] sm:pt-px">
                  {group.year}
                </p>
                <div className="space-y-px">
                  {group.items.map((item, ii) => (
                    <motion.div
                      key={item.name + item.location}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.5, delay: gi * 0.06 + ii * 0.05 }}
                      className="flex flex-col gap-1 border-t border-white/8 py-4 sm:flex-row sm:items-baseline sm:gap-6"
                    >
                      <p className="display-title text-[1.15rem] uppercase leading-none text-white">
                        {item.name}
                      </p>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#18c8d2]">
                        {item.location}
                      </p>
                      <p className="ml-auto text-[11px] leading-5 text-[#cfc3bb]">
                        {item.detail}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section
        id="gallery"
        className="shell py-10 sm:py-14 lg:py-16"
        aria-labelledby="gallery-title"
      >
        <SectionReveal className="mb-8 flex flex-col justify-between gap-5 sm:mb-10 md:flex-row md:items-end">
          <div>
            <p className="kicker">Galerie</p>
            <h2
              id="gallery-title"
              className="display-title mt-5 text-[2.4rem] uppercase leading-none text-white sm:text-[3.5rem]"
            >
              Tableaux
            </h2>
          </div>
          <p className="max-w-[31rem] text-sm leading-7 text-[#cfc3bb]">
            Selection presskit. Les dimensions physiques peuvent etre completees
            des reception des fiches techniques.
          </p>
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
            href="https://en.melymelow.art/accueil"
            target="_blank"
            rel="noreferrer noopener"
            className="color-button"
          >
            Voir plus de tableaux
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
                alt="MélyMelOw contact"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex min-w-0 flex-col justify-center space-y-7">
              <div>
                <p className="kicker">Contact</p>
                <h2
                  id="contact-title"
                  className="display-title mt-5 max-w-[16ch] text-[2.4rem] uppercase leading-none text-white sm:text-[3.8rem] lg:text-[4.6rem]"
                >
                  Demandes presse, expo et acquisition.
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
    </main>
  );
}
