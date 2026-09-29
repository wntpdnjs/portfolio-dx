import type { Metadata } from "next";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  title: portfolio.seo.title, description: portfolio.seo.description,
  applicationName: portfolio.seo.title,
  openGraph: { title: portfolio.seo.title, description: portfolio.seo.description, locale: "ko_KR", type: "website" },
  twitter: { card: "summary", title: portfolio.seo.title, description: portfolio.seo.description },
  robots: { index: true, follow: true }, icons: { icon: "/icon.svg" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
