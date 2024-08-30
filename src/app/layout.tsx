import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from '@/components/header/Header';
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js app",
  description: "Next.js app cloud hosting",
};

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
