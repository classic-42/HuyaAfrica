/**
 * © 2026 HuyaAfrica Tech. All rights reserved.
 * Production Build - High Performance Digital Solutions.
 * Designing a Better Tomorrow, Today!
 */

import Link from "next/link";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

// Footer navigation links configuration
const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ],
  services: [
    { href: "/services", label: "Software Development" },
    { href: "/services", label: "Web & Mobile Solutions" },
    { href: "/services", label: "IT Consulting" },
    { href: "/services", label: "Digital Transformation" },
  ],
};

// Social media links - replace # with actual URLs
const socialLinks = [
  { href: "#", icon: Linkedin, label: "LinkedIn" },
  { href: "#", icon: Twitter, label: "Twitter" },
  { href: "#", icon: Facebook, label: "Facebook" },
  { href: "#", icon: Instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-accent/20 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-20 w-64 overflow-hidden rounded-lg">
                <Image
                  src="/logo.png"
                  alt="HuyAfrica Technologies"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Designing a Better Tomorrow. TODAY! <br />
              Innovative digital solutions across Africa and beyond.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-2 lg:ml-auto">
            {/* Company Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Services
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information Column */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold text-foreground">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>huyafricatechnologies@gmail.com</li>
              <li>+263 78 782 1762</li>
              <li>Harare, Zimbabwe</li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} HuyAfrica Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
