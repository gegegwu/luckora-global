import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luckora 星标天赋测试",
  description: "40 道题发现你的隐藏天赋密码，生成一次性专属报告。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
