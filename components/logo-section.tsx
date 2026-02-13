/**
 * Logo Section Component
 * 
 * Displays a curated list of logos of companies worked with.
 * Features a smooth infinite horizontal scroll (marquee) effect.
 */

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const logos = [
    { src: "/logos/1.png", alt: "Company Logo 1" },
    { src: "/logos/HOT LOGO2.jpg", alt: "Hot Logo" },
    { src: "/logos/WhatsApp Image 2026-02-12 at 10.09.56.jpeg", alt: "Client Logo" },
    { src: "/logos/WhatsApp Image 2026-02-13 at 08.14.01.jpeg", alt: "Partner Logo" },
    { src: "/logos/WhatsApp Image 2026-02-13 at 08.16.54.jpeg", alt: "Client Logo" },
    { src: "/logos/WhatsApp Image 2026-02-13 at 08.17.28.jpeg", alt: "Partner Logo" },
    { src: "/logos/cloud.jpeg", alt: "Cloud Technology Partner" },
];

// Double the logos for infinite scroll effect
const allLogos = [...logos, ...logos];

export function LogoSection() {
    return (
        <section className="py-16 bg-background overflow-hidden relative border-y border-border/50">
            <div className="container mx-auto px-4 mb-8">
                <div className="flex flex-col items-center text-center">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Trusted by Innovative Companies
                    </h3>
                    <div className="h-1 w-12 bg-gradient-to-r from-brand-orange via-brand-magenta to-brand-purple rounded-full"></div>
                </div>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="py-8 animate-marquee whitespace-nowrap flex items-center">
                    {allLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="mx-12 w-32 h-16 relative transition-all duration-300 hover:scale-125 z-10"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                fill
                                className="object-contain"
                                sizes="128px"
                            />
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap flex items-center">
                    {allLogos.map((logo, index) => (
                        <div
                            key={`duplicate-${index}`}
                            className="mx-12 w-32 h-16 relative transition-all duration-300 hover:scale-125 z-10"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                fill
                                className="object-contain"
                                sizes="128px"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Gradient overlays for smooth fading at edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>

            <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 40s linear infinite;
        }
      `}</style>
        </section>
    );
}
