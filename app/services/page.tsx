

import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ServicesGallery } from "@/components/services-gallery";
import { FloatingLogos } from "@/components/floating-logos";
import {
  ArrowRight,
  Cloud,
  Code2,
  Layers,
  MonitorSmartphone,
  RefreshCw,
  Settings,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services | HuyaAfrica Technologies",
  description:
    "Explore our comprehensive IT services including software development, web & mobile solutions, IT consulting, digital transformation, and cloud solutions.",
};

const services = [
  {
    name: "Software Development",
    description:
      "Custom software solutions tailored to your business needs. From enterprise applications to specialized tools, we build software that drives efficiency and growth.",
    icon: Code2,
    features: [
      "Custom Enterprise Software",
      "API Development & Integration",
      "Database Design & Optimization",
      "Legacy System Modernization",
    ],
  },
  {
    name: "Web & Mobile Solutions",
    description:
      "Responsive websites and mobile applications that deliver exceptional user experiences. We create digital products that engage and convert.",
    icon: MonitorSmartphone,
    features: [
      "Progressive Web Apps",
      "Native iOS & Android Apps",
      "E-commerce Platforms",
      "Content Management Systems",
    ],
  },
  {
    name: "IT Consulting",
    description:
      "Strategic technology guidance to help you make informed decisions. We analyze your needs and recommend solutions that align with your goals.",
    icon: Settings,
    features: [
      "Technology Assessment",
      "Digital Strategy Planning",
      "IT Infrastructure Advisory",
      "Security & Compliance Consulting",
    ],
  },
  {
    name: "Digital Transformation",
    description:
      "End-to-end digital transformation services to modernize your business processes and enhance operational efficiency.",
    icon: RefreshCw,
    features: [
      "Business Process Automation",
      "Data Analytics & Insights",
      "Digital Workflow Optimization",
      "Change Management Support",
    ],
  },
  {
    name: "Cloud & System Solutions",
    description:
      "Scalable cloud infrastructure and system solutions that provide reliability, security, and performance for your business.",
    icon: Cloud,
    features: [
      "Cloud Migration Services",
      "AWS, Azure & GCP Solutions",
      "DevOps Implementation",
      "System Architecture Design",
    ],
  },
  {
    name: "Integration Services",
    description:
      "Seamless integration of systems, applications, and data to create unified digital ecosystems for your organization.",
    icon: Layers,
    features: [
      "Third-party API Integration",
      "Enterprise System Integration",
      "Data Migration & Sync",
      "Middleware Development",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative bg-primary py-20 sm:py-28 overflow-hidden">
          <FloatingLogos />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Our Services
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Comprehensive IT solutions designed to transform your business.
                From concept to deployment, we deliver excellence at every step.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicesGallery />

        <section className="bg-muted/30 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {"Need a Custom Solution?"}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {"Every business is unique. Let's discuss your specific requirements and create a tailored solution that perfectly fits your needs."}
              </p>
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
