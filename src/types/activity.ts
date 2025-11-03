import { ui } from "../i18n/ui";

// Extract activity translation keys from the ui object
export type ActivityTranslationKeys = {
  [K in keyof typeof ui.ro]: K extends `activity.${string}` ? K : never;
}[keyof typeof ui.ro];

export interface Activity {
  id: string;
  nameKey: ActivityTranslationKeys;
}

export type ActivityList = Activity[];
