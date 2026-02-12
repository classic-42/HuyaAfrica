"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// This should match the data in ServicesGallery for consistency, 
// or be a superset of it.
const projects = [
    {
        id: "enterprise-software",
        title: "Enterprise Software Solution",
        description: "A comprehensive ERP system designed for a multinational logistics company, streamlining operations and increasing efficiency by 40%.",
        image: "/images/gallery/software-dev.png",
        tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
        id: "mobile-experiences",
        title: "Consumer Mobile App",
        description: "An award-winning lifestyle application with over 1M+ downloads, featuring real-time social integration and premium UX design.",
        image: "/images/gallery/mobile-design.jpg",
        tags: ["React Native", "Firebase", "Redux"],
    },
    {
        id: "cloud-infrastructure",
        title: "Cloud Infrastructure Setup",
        description: "Migration of legacy on-premise servers to a scalable AWS architecture, resulting in 99.99% uptime and 30% cost reduction.",
        image: "/images/gallery/cloud.jpeg",
        tags: ["AWS", "Terraform", "Docker"],
    },
    {
        id: "strategic-consulting",
        title: "Digital Strategy Consulting",
        description: "Strategic roadmap development for a retail giant entering the e-commerce space, guiding them to a successful $50M digital launch.",
        image: "/images/gallery/consulting.png",
        tags: ["Strategy", "Digital Transformation"],
    },
    {
        id: "e-commerce-platform",
        title: "Global E-Commerce Platform",
        description: "A high-performance headless e-commerce solution supporting multi-currency and multi-language capabilities for global retail.",
        image: "/images/gallery/software-dev.png",
        tags: ["Next.js", "Shopify Plus", "Sanity"],
    },
    {
        id: "fintech-app",
        title: "Fintech Mobile Wallet",
        description: "Secure mobile payment application with biometric authentication and seamless bank integration.",
        image: "/images/gallery/mobile-design.jpg",
        tags: ["Flutter", "Go", "Security"],
    },
    {
        id: "data-analytics",
        title: "Real-time Analytics Dashboard",
        description: "Interactive dashboard visualizing complex data sets for executive decision-making.",
        image: "/images/gallery/cloud.jpeg",
        tags: ["D3.js", "Python", "BigQuery"],
    },
    {
        id: "healthcare-system",
        title: "Hospital Management System",
        description: "Integrated patient records and scheduling system compliant with healthcare regulations.",
        image: "/images/gallery/consulting.png",
        tags: ["Java", "Angular", "Oracle"],
    },
    {
        id: "iot-solution",
        title: "Smart Home IoT Hub",
        description: "Centralized control hub for smart home devices with voice assistant integration.",
        image: "/images/gallery/software-dev.png",
        tags: ["IoT", "MQTT", "Embedded C"],
    },
    {
        id: "cybersecurity-audit",
        title: "Enterprise Security Audit",
        description: "Comprehensive security assessment and vulnerability testing for a financial institution.",
        image: "/images/gallery/cloud.jpeg",
        tags: ["Security", "Penetration Testing"],
    },
];

export function ProjectShowcase() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);
    const [projectId, setProjectId] = useState<string | null>(null);

    useEffect(() => {
        const project = searchParams.get("project");
        if (project) {
            setProjectId(project);
            setIsOpen(true);
            // Find index and scroll to it
            const index = projects.findIndex((p) => p.id === project);
            if (index !== -1 && emblaApi) {
                emblaApi.scrollTo(index);
            }
        } else {
            setIsOpen(false);
        }
    }, [searchParams, emblaApi]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const closeShowcase = () => {
        setIsOpen(false);
        // Ideally update URL to remove param without reload, but simpler here:
        window.history.pushState({}, "", "/");
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm p-4 sm:p-8"
            >
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-4 z-50 rounded-full"
                    onClick={closeShowcase}
                >
                    <X className="h-6 w-6" />
                </Button>

                <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl bg-card shadow-2xl border border-border">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="relative min-w-0 flex-[0_0_100%]"
                                >
                                    <div className="grid h-[80vh] grid-cols-1 md:grid-cols-2">
                                        {/* Image Section */}
                                        <div className="relative h-1/2 w-full md:h-full">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
                                        </div>

                                        {/* Content Section */}
                                        <div className="flex h-1/2 flex-coljustify-center p-8 md:h-full md:p-12 lg:p-16">
                                            <div className="flex flex-col justify-center h-full space-y-6">
                                                <div className="flex flex-wrap gap-2">
                                                    {project.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                                                    {project.title}
                                                </h2>
                                                <p className="text-lg text-muted-foreground">
                                                    {project.description}
                                                </p>

                                                <div className="pt-6">
                                                    <Button size="lg" className="gap-2" onClick={closeShowcase}>
                                                        Close Project Details
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 hover:bg-background"
                        onClick={scrollPrev}
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/50 hover:bg-background"
                        onClick={scrollNext}
                    >
                        <ChevronRight className="h-6 w-6" />
                    </Button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
