/**
 * © 2026 HuyaAfrica Tech. All rights reserved.
 * Production Build - High Performance Digital Solutions.
 * Designing a Better Tomorrow, Today!
 */

import React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LiveBackground } from "@/components/live-background";
import "./globals.css";

// Font configuration
const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// Global SEO metadata
export const metadata: Metadata = {
  title: "HuyAfrica Technologies | Designing a Better Tomorrow. TODAY!",
  description:
    "HuyAfrica Technologies is a dynamic IT company delivering innovative digital solutions across Africa and beyond. Software development, web & mobile solutions, IT consulting, and digital transformation.",
  generator: "v0.app",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning>
        <div className="fixed inset-0 z-[-1] bg-background">
          <LiveBackground />
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
