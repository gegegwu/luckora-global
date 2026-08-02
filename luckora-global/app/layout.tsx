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
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      siteConfig.googleSiteVerification,
  },
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
      <head>
        <script
          async
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1004666604396408"
        />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
