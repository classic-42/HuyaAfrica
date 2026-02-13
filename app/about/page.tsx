

import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { FloatingLogos } from "@/components/floating-logos";
import {
  Award,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | HuyaAfrica Technologies",
  description:
    "Learn about HuyaAfrica Technologies - a dynamic IT company delivering innovative digital solutions across Africa and beyond.",
};

const values = [
  {
    name: "Quality & Reliability",
    description:
      "We deliver robust, high-quality solutions that stand the test of time and exceed expectations.",
    icon: Award,
  },
  {
    name: "Integrity & Transparency",
    description:
      "We build trust through honest communication and ethical business practices.",
    icon: ShieldCheck,
  },
  {
    name: "Collaboration",
    description:
      "We work closely with our clients, treating their goals as our own.",
    icon: Handshake,
  },
  {
    name: "Innovative Problem-Solving",
    description:
      "We approach challenges with creativity and leverage cutting-edge technology.",
    icon: Lightbulb,
  },
];

const team = [
  {
    name: "Kelvin Jukwa",
    role: "Founder & CEO",
    bio: "A visionary leader with over 15 years of experience in the African tech ecosystem, dedicated to driving digital transformation.",
    image: "/team/ceo.jpg",
  },
  {
    name: "Dephine Kachare",
    role: "Co-Founder & Marketing Director",
    bio: "A strategic marketing expert passionate about building brands that resonate and making technology accessible to all.",
    image: "/team/marketing.jpg",
  },
  {
    name: "Asher Tatenda Mpaso",
    role: "Chief Technical Officer",
    bio: "An innovative architect of complex systems, leading our engineering team to build world-class digital solutions.",
    image: "/team/cto.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative bg-primary py-20 sm:py-28 overflow-hidden">
          <FloatingLogos />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                About HuyaAfrica Technologies
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                A dynamic IT company at the forefront of digital innovation,
                delivering transformative solutions across Africa and beyond.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">
                  Who We Are
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    HuyaAfrica Technologies is a forward-thinking IT company with
                    deep expertise in digital innovation. We understand the
                    unique challenges and opportunities within the African
                    context while staying connected to global tech trends.
                  </p>
                  <p className="leading-relaxed">
                    Our team combines local insight with world-class technical
                    skills to deliver solutions that truly make an impact. From
                    startups to enterprises, we help businesses harness the
                    power of technology to achieve their goals.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center">
                    <Target className="h-8 w-8 text-accent" />
                    <span className="mt-3 text-2xl font-bold text-foreground">
                      50+
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Projects Delivered
                    </span>
                  </div>
                  <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center">
                    <Users className="h-8 w-8 text-accent" />
                    <span className="mt-3 text-2xl font-bold text-foreground">
                      30+
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Happy Clients
                    </span>
                  </div>
                  <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center">
                    <Award className="h-8 w-8 text-accent" />
                    <span className="mt-3 text-2xl font-bold text-foreground">
                      5+
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Years Experience
                    </span>
                  </div>
                  <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center">
                    <Handshake className="h-8 w-8 text-accent" />
                    <span className="mt-3 text-2xl font-bold text-foreground">
                      10+
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Countries Served
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Our Mission
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-muted-foreground">
                {
                  '"To transform ideas into impactful digital solutions by leveraging innovation, technology, and creativity to empower businesses and communities across Africa and beyond."'
                }
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Our Core Values
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                The principles that guide everything we do at HuyaAfrica
                Technologies.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.name}
                  className="rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">
                    {value.name}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Our Leadership Team
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Meet the visionary minds behind HuyaAfrica Technologies.
              </p>
            </div>

            <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-accent/50 hover:shadow-xl"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="text-xl font-bold text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-1 font-medium text-primary">
                      {member.role}
                    </p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
