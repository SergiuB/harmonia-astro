import { useTranslations } from "../i18n/utils";
import type { Locale } from "../config/i18n";

type Link = {
  titleKey: string; // Translation key instead of hardcoded title
  path: string; // Path without language prefix
  className?: string;
};

// Base link definitions using translation keys
const baseLinkDefinitions: Link[] = [
  {
    titleKey: "nav.services",
    path: "/services",
  },
  {
    titleKey: "nav.facilitators",
    path: "/facilitators",
  },
  {
    titleKey: "nav.space",
    path: "/space",
  },
  {
    titleKey: "nav.activities",
    path: "/space/?scrollTo=events_calendar",
    className: "closable-link",
  },
  {
    titleKey: "nav.contact",
    path: "/space/?scrollTo=contact",
    className: "closable-link",
  },
];

// Function to get localized links
export function getLocalizedLinks(lang: Locale) {
  const t = useTranslations(lang);
  return baseLinkDefinitions.map((link) => ({
    title: t(link.titleKey as any), // Cast needed for translation keys
    url: `/${lang}${link.path}`,
    className: link.className,
  }));
}

// For backward compatibility, export individual link functions
export function getServicesLink(lang: Locale) {
  const t = useTranslations(lang);
  return {
    title: t("nav.services"),
    url: `/${lang}/services`,
  };
}

export function getSpaceLink(lang: Locale) {
  const t = useTranslations(lang);
  return {
    title: t("nav.space"),
    url: `/${lang}/space`,
  };
}

// Export the base definitions for cases where you need them
export const linkDefinitions = baseLinkDefinitions;
