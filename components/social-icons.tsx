import { Globe2, Mail } from "lucide-react";

export { Globe2, Mail };

export function InstagramIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="ig-melymelow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f9ce34" />
          <stop offset="45%" stopColor="#ee2a7b" />
          <stop offset="100%" stopColor="#6228d7" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#ig-melymelow)" />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="white" strokeWidth="1.8" />
      <circle cx="17.25" cy="6.75" r="1.2" fill="white" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <circle cx="12" cy="12" r="10" fill="#25D366" />
      <path
        d="M15.84 13.97c-.2-.1-1.16-.57-1.34-.64-.18-.07-.31-.1-.44.1-.13.2-.5.64-.61.77-.11.13-.23.15-.42.05-.2-.1-.85-.31-1.62-.98-.6-.53-1-1.18-1.12-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.34.1-.12.13-.2.2-.33.07-.13.03-.25-.02-.35-.05-.1-.44-1.07-.6-1.47-.16-.39-.32-.34-.44-.35h-.38c-.13 0-.35.05-.53.25-.18.2-.69.67-.69 1.64s.7 1.9.8 2.03c.1.13 1.37 2.1 3.32 2.94.47.2.84.33 1.13.43.47.15.9.13 1.24.08.38-.06 1.16-.47 1.33-.92.16-.46.16-.85.11-.92-.04-.07-.17-.11-.37-.21z"
        fill="white"
      />
    </svg>
  );
}

export function TikTokIcon({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="#111111" />
      <path
        d="M14.8 5.5c.4 1.15 1.1 2 2.25 2.55.48.23.97.37 1.45.42v2.18a6.34 6.34 0 01-1.9-.46 5.5 5.5 0 01-.98-.53v4.17a4.78 4.78 0 11-4.78-4.77c.16 0 .31 0 .47.03v2.27a2.5 2.5 0 00-.47-.05 2.5 2.5 0 102.49 2.52V5.5h1.47z"
        fill="#25F4EE"
      />
      <path
        d="M14.42 5.1c.39 1.15 1.06 2 2.21 2.55.48.23.97.37 1.45.42v2.18a6.34 6.34 0 01-1.9-.46 5.5 5.5 0 01-.98-.53v4.17a4.78 4.78 0 11-4.78-4.77c.16 0 .31 0 .47.03v2.27a2.5 2.5 0 00-.47-.05 2.5 2.5 0 102.49 2.52V5.1h1.51z"
        fill="#FE2C55"
        opacity="0.92"
      />
      <path
        d="M14.62 5.3c.39 1.15 1.06 2 2.21 2.55.48.23.97.37 1.45.42v2.18a6.34 6.34 0 01-1.9-.46 5.5 5.5 0 01-.98-.53v4.17a4.78 4.78 0 11-4.78-4.77c.16 0 .31 0 .47.03v2.27a2.5 2.5 0 00-.47-.05 2.5 2.5 0 102.49 2.52V5.3h1.51z"
        fill="white"
      />
    </svg>
  );
}
