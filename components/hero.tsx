/**
 * Hero Component
 * 
 * The main hero section for the homepage featuring:
 * - Bold headline with accent color highlight
 * - Company value proposition
 * - Call-to-action buttons
 * - Subtle grid background pattern
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FloatingLogos } from "./floating-logos";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40" style={{ background: "linear-gradient(135deg, var(--brand-orange) 0%, var(--brand-magenta) 50%, var(--brand-purple) 100%)" }}>
      {/* 3D Floating Logos Background */}
      <FloatingLogos />

      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Main Headline */}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Designing a Better Tomorrow.{" "}
            <span className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">TODAY!</span>
          </h1>

          {/* Subheadline / Value Proposition */}
          <p className="mt-6 text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
            HuyaAfrica Technologies is a dynamic IT company delivering innovative
            digital solutions across Africa and beyond. We transform ideas into
            impactful products that drive growth and success.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Primary CTA */}
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            {/* Secondary CTA */}
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
