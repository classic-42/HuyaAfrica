import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { HeroSlideshow } from "@/components/hero-slideshow";
import { Features } from "@/components/features";
import { CTASection } from "@/components/cta-section";
import { ProjectShowcase } from "@/components/project-showcase";
import { LogoSection } from "@/components/logo-section";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSlideshow />
        <Features />
        <Suspense fallback={null}>
          <ProjectShowcase />
        </Suspense>
        <LogoSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
