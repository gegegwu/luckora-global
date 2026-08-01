"use client";

import { useEffect, useMemo } from "react";
import { ReservedPage } from "@/components/reserved-page";
import { StarField } from "@/components/star-field";
import { getDictionary } from "@/lib/i18n";

export default function ProfilePage() {
  const locale = "en";
  const dictionary = useMemo(() => getDictionary(locale), [locale]);
  const direction = "ltr";

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = direction;
  }, [direction, locale]);

  return (
    <main className="site-shell test-shell" dir={direction}>
      <StarField />
      <div className="cosmic-noise" />
      <div className="nebula nebula-a" />
      <div className="nebula nebula-b" />
      <header className="nav">
        <a aria-label="Luckora home" className="logo" href="/">
          <span>L U C K</span>
          <span className="orbital-o">O</span>
          <span>R A</span>
        </a>
      </header>
      <ReservedPage
        body={dictionary.profileEntry.body}
        eyebrow={dictionary.profileEntry.eyebrow}
        primary={dictionary.profileEntry.primary}
        title={dictionary.profileEntry.title}
      />
    </main>
  );
}
