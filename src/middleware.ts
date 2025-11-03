import { defineMiddleware } from "astro:middleware";
import { i18nConfig } from "./config/i18n.ts";

export const onRequest = defineMiddleware(({ url, redirect }, next) => {
  const pathname = url.pathname;

  // Check if pathname already has a locale prefix
  const hasLocalePrefix = i18nConfig.locales.some(
    (locale: string) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  // Don't redirect if already has language prefix or is a static asset
  if (
    hasLocalePrefix ||
    pathname.startsWith("/_") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".") // Skip files with extensions (images, etc.)
  ) {
    return next();
  }

  // Redirect to default locale for any path without language prefix
  const newUrl =
    pathname === "/"
      ? `/${i18nConfig.defaultLocale}`
      : `/${i18nConfig.defaultLocale}${pathname}`;
  return redirect(newUrl, 301);
});
