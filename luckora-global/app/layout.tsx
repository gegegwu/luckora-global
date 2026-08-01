import type { Metadata } from "next";
import { GoogleAnalytics } from "@/components/google-analytics";
import { createSeoMetadata, siteConfig } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    path: "/",
  }),
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "x-default": "/",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
