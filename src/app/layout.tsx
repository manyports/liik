import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";


export const metadata: Metadata = {
  title: "Ли и К - ваш бухгалтер онлайн",
  description: "Ли и к готовы помочь вам с ведением бухгалтерии, налоговыми декларациями и финансовым планированием.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
