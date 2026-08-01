import ar from "@/locales/ar.json";
import en from "@/locales/en.json";
import es from "@/locales/es.json";
import zhCN from "@/locales/zh-CN.json";

export const locales = {
  en,
  "zh-CN": zhCN,
  es,
  ar,
};

export type Locale = keyof typeof locales;
export type Dictionary = (typeof locales)["en"];

export const languageOptions: Array<{
  code: Locale;
  label: string;
  short: string;
  dir: "ltr" | "rtl";
}> = [
  { code: "en", label: "English", short: "EN", dir: "ltr" },
  { code: "zh-CN", label: "中文", short: "中文", dir: "ltr" },
  { code: "es", label: "Español", short: "ES", dir: "ltr" },
  { code: "ar", label: "العربية", short: "العربية", dir: "rtl" },
];

export function normalizeLocale(value?: string | null): Locale {
  if (!value) return "en";
  const lower = value.toLowerCase();

  if (lower.startsWith("zh")) return "zh-CN";
  if (lower.startsWith("es")) return "es";
  if (lower.startsWith("ar")) return "ar";

  return "en";
}

export function getDictionary(locale: Locale): Dictionary {
  return locales[locale];
}
