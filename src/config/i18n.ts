export const i18nConfig = {
  defaultLocale: "ro",
  locales: ["ro", "en"],
} as const;

export type Locale = (typeof i18nConfig.locales)[number];
