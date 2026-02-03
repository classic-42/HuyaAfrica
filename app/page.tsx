/**
 * Home Page
 * 
 * The main landing page for HuyAfrica Technologies website.
 * Composed of reusable components:
 * - Navbar: Global navigation
 * - Hero: Main headline and CTAs
 * - Features: Why choose us section
 * - CTASection: Final call-to-action
 * - Footer: Site-wide footer
 */

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { CTASection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
