import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New, Noto_Sans_JP, DM_Sans } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const zenKaku = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
  adjustFontFallback: false,
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  title: "森林サービス産業 先進事例集 | 森から届く、新しい価値",
  description:
    "林野庁委託事業による森林サービス産業の先進事例14件を紹介。健康経営、森林セラピー、アウトドアアクティビティなど、森林資源を活用した新たなビジネスモデルを学べます。",
  keywords: [
    "森林サービス産業",
    "森林セラピー",
    "健康経営",
    "森林資源",
    "山村活性化",
    "林野庁",
  ],
  authors: [{ name: "林野庁" }],
  openGraph: {
    title: "森林サービス産業 先進事例集",
    description:
      "森から届く、新しい価値 - 14の先進事例を通じて森林サービス産業の可能性を探る",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${zenKaku.variable} ${notoSansJP.variable} ${dmSans.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
