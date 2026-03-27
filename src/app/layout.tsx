import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Macework Creativ",
    default: "Macework Creativ - Yaratıcı Teknoloji ve Ürün Stüdyosu",
  },
  description: "Macework Creativ, yenilikçi SaaS ürünleri, ölçeklenebilir dijital çözümler ve modern teknoloji altyapıları geliştiren kreatif stüdyodur.",
  openGraph: {
    title: "Macework Creativ - Yaratıcı Teknoloji ve Ürün Stüdyosu",
    description: "Macework Creativ, yenilikçi SaaS ürünleri ve dijital çözümler geliştiren kreatif teknoloji stüdyosudur.",
    url: "https://macework.com",
    siteName: "Macework Creativ",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Macework Creativ - Yaratıcı Teknoloji ve Ürün Stüdyosu",
    description: "Yenilikçi SaaS ürünleri ve dijital çözümler geliştiren kreatif teknoloji stüdyosudur.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { Header } from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
