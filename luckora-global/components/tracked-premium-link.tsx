"use client";

import type { ReactNode } from "react";
import { trackPremiumClick } from "@/lib/analytics";

export function TrackedPremiumLink({
  children,
  className,
  href,
  source,
}: {
  children: ReactNode;
  className: string;
  href: string;
  source: string;
}) {
  return (
    <a
      className={className}
      href={href}
      onClick={() => trackPremiumClick(source)}
    >
      {children}
    </a>
  );
}
