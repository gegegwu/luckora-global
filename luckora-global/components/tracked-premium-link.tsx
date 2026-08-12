"use client";

import type { ReactNode } from "react";
import { trackPremiumClick } from "@/lib/analytics";

export function TrackedPremiumLink({
  children,
  className,
  href,
  offerPrice,
  offerStage,
  offerType,
  source,
}: {
  children: ReactNode;
  className: string;
  href: string;
  offerPrice?: string;
  offerStage?: string;
  offerType?: string;
  source: string;
}) {
  return (
    <a
      className={className}
      href={href}
      onClick={() =>
        trackPremiumClick(source, {
          offerPrice,
          offerStage,
          offerType,
        })
      }
    >
      {children}
    </a>
  );
}
