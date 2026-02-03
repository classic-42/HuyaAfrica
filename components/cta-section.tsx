/**
 * CTA Section Component
 * 
 * A reusable call-to-action section that encourages
 * users to take the next step (contact the company).
 * Features a centered layout with headline, description, and button.
 */

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* CTA Headline */}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to Transform Your Business?
          </h2>

          {/* CTA Description */}
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {"Let's discuss how HuyaAfrica Technologies can help you achieve your digital goals. Our team is ready to bring your vision to life."}
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <Button asChild size="lg">
              <Link href="/contact">
                {"Let's Talk"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
