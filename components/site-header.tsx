"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = {
  fr: [
    { href: "#bio", label: "Bio" },
    { href: "#concept", label: "Concept" },
    { href: "#gallery", label: "Galerie" },
    { href: "#contact", label: "Contact" },
  ],
  en: [
    { href: "#bio", label: "Bio" },
    { href: "#concept", label: "Concept" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ],
};

const ctaLabel = {
  fr: "Contacter MelyMelow",
  en: "Contact MelyMelow",
};

type Lang = "fr" | "en";

export function SiteHeader({ lang = "fr" }: { lang?: Lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className={`mx-auto w-full max-w-[1440px] border-b border-white/10 px-4 py-3 backdrop-blur-md transition sm:px-8 lg:px-12 ${
          hasScrolled ? "bg-[#080607]/82" : "bg-[#080607]/24"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="display-title text-2xl uppercase text-white sm:text-3xl"
            onClick={closeMenu}
          >
            MelyMelow
          </Link>

          <div className="hidden items-center gap-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#d5ccd1] sm:flex">
            {navLinks[lang].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="color-button py-1.5 text-[9px] tracking-[0.26em]"
            >
              {ctaLabel[lang]}
            </a>
          </div>

          <button
            type="button"
            className="relative inline-flex size-10 items-center justify-center border border-white/15 text-white sm:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-white transition ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-px w-5 bg-white transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-px w-5 bg-white transition ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {isOpen ? (
          <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 text-right sm:hidden">
            {navLinks[lang].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#d5ccd1]"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#contact"
              className="color-button mt-1 justify-center text-[9px] tracking-[0.26em]"
              onClick={closeMenu}
            >
              {ctaLabel[lang]}
            </a>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
