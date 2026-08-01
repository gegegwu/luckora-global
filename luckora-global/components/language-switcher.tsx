"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  getDictionary,
  languageOptions,
  type Locale,
  normalizeLocale,
} from "@/lib/i18n";

const STORAGE_KEY = "luckora_locale";

type LanguageSwitcherProps = {
  locale: Locale;
  onChange: (locale: Locale) => void;
};

export function LanguageSwitcher({ locale, onChange }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const dictionary = getDictionary(locale);
  const current = languageOptions.find((option) => option.code === locale)!;

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      onChange(normalizeLocale(stored));
      return;
    }

    onChange(normalizeLocale(window.navigator.language));
  }, [onChange]);

  function selectLanguage(nextLocale: Locale) {
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    onChange(nextLocale);
    setOpen(false);
  }

  return (
    <div className="language-switcher">
      <button
        aria-expanded={open}
        aria-label={dictionary.language.label}
        className="language-trigger"
        onClick={() => setOpen((value) => !value)}
      >
        <span>🌐</span>
        <b>{current.short}</b>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="language-menu"
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            {languageOptions.map((option) => (
              <button
                className={option.code === locale ? "active" : ""}
                key={option.code}
                onClick={() => selectLanguage(option.code)}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
