"use client";

import type { ReactNode } from "react";
import { trackStartTestClick } from "@/lib/analytics";

export function TrackedTestLink({
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
      onClick={() => trackStartTestClick(source)}
    >
      {children}
    </a>
  );
}
