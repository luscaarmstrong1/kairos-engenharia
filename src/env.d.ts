/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_FORM_ENDPOINT?: string;
  readonly PUBLIC_WHATSAPP_NUMBER?: string;
  readonly PUBLIC_CALENDAR_URL?: string;
  readonly PUBLIC_LINKEDIN_URL?: string;
  readonly PUBLIC_GA_MEASUREMENT_ID?: string;
  readonly PUBLIC_TURNSTILE_SITE_KEY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
