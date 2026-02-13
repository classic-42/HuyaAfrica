/**
 * Contact Page
 * 
 * Provides multiple ways to get in touch with HuyaAfrica Technologies:
 * - Contact information (email, phone, location)
 * - Interactive contact form
 * - Embedded Google Maps location
 * 
 * @route /contact
 */

import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { FloatingLogos } from "@/components/floating-logos";
import { Mail, MapPin, Phone } from "lucide-react";

// Page-specific metadata for SEO
export const metadata: Metadata = {
  title: "Contact Us | HuyaAfrica Technologies",
  description:
    "Get in touch with HuyaAfrica Technologies. We are here to discuss your digital transformation needs and help bring your ideas to life.",
};

// Contact information data
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@huyafricatechnologies.co.zw",
    href: "mailto:info@huyafricatechnologies.co.zw",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+263 78 782 1762",
    href: "tel:+263787821762",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Harare, Zimbabwe",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page Hero Section */}
        <section className="relative bg-primary py-20 sm:py-28 overflow-hidden">
          <FloatingLogos />
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                Get in Touch
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                {"Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible."}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-background py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5 lg:gap-16">
              {/* Contact Information Column */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Contact Information
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Reach out to us through any of the following channels. Our
                  team is ready to assist you with your digital needs.
                </p>

                {/* Contact Info Cards */}
                <div className="mt-8 space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground transition-colors hover:text-accent"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Embedded Google Maps */}
                <div className="mt-10 aspect-video overflow-hidden rounded-2xl border border-border bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121516.32688002633!2d31.02641795!3d-17.82485825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4e706b17161%3A0xaec014b29598a3e!2sHarare!5e0!3m2!1sen!2szw!4v1710000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="HuyaAfrica Technologies Location"
                  />
                </div>
              </div>

              {/* Contact Form Column */}
              <div className="lg:col-span-3">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Send Us a Message
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Fill out the form below and we will get back to you within 24
                  hours.
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
