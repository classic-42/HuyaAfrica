/**
 * Features Component
 * 
 * Displays key company differentiators in a responsive grid.
 * Each feature card includes:
 * - Icon with styled background
 * - Feature title
 * - Brief description
 * - Hover animation effects
 */

import { Globe, Lightbulb, Shield, Users } from "lucide-react";

// Features data - easily customizable
const features = [
  {
    name: "Global Reach",
    description:
      "Operating across Africa and beyond, we bring world-class digital solutions to businesses of all sizes.",
    icon: Globe,
  },
  {
    name: "Innovation First",
    description:
      "We leverage cutting-edge technologies and creative approaches to solve complex business challenges.",
    icon: Lightbulb,
  },
  {
    name: "Trusted Partner",
    description:
      "Built on integrity and transparency, we establish lasting relationships with our clients.",
    icon: Shield,
  },
  {
    name: "Expert Team",
    description:
      "Our skilled professionals bring diverse expertise to deliver exceptional results.",
    icon: Users,
  },
];

export function Features() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose HuyaAfrica Technologies?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            We combine African innovation with global expertise to deliver
            digital solutions that make a difference.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:gap-12">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative rounded-2xl border border-border bg-card p-8 transition-all hover:border-accent/50 hover:shadow-lg"
            >
              {/* Feature Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Feature Content */}
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {feature.name}
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
