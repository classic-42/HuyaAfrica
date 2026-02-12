"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 1,
        headline: "Designing a Better Tomorrow.",
        highlight: "TODAY!",
        description: "HuyaAfrica Technologies is a dynamic IT company delivering innovative digital solutions across Africa and beyond. We transform ideas into impactful products.",
    },
    {
        id: 2,
        headline: "Empowering Business with",
        highlight: "CLOUD Tech",
        description: "Scalable, secure, and reliable cloud infrastructure solutions designed to help your business grow without limits.",
    },
    {
        id: 3,
        headline: "Strategic Consulting for",
        highlight: "GROWTH",
        description: "Expert guidance to navigate the digital landscape. We help you make informed decisions that drive sustainable success.",
    },
];

export function HeroSlideshow() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000); // Change slide every 6 seconds
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <section className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover"
                >
                    <source src="/intro.mp4" type="video/mp4" />
                </video>
                {/* Overlay to ensure text readability and brand color tint */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/30 via-brand-magenta/30 to-brand-purple/30 opacity-60" />
            </div>

            {/* Decorative Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]" />
            </div>


            <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">

                    <div className="relative min-h-[300px]"> {/* Container to prevent layout shift */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center"
                            >
                                {/* Main Headline */}
                                <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                                    {slides[currentSlide].headline}{" "}
                                    <span className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">{slides[currentSlide].highlight}</span>
                                </h1>

                                {/* Subheadline / Value Proposition */}
                                <p className="mt-6 text-pretty text-lg leading-relaxed text-white/90 sm:text-xl">
                                    {slides[currentSlide].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

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
                            className="w-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
                        >
                            <Link href="/services">Our Services</Link>
                        </Button>
                    </div>

                    {/* Slide Navigation Dots */}
                    <div className="mt-12 flex justify-center gap-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 w-2 rounded-full transition-all ${index === currentSlide ? "bg-accent w-6" : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
