"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const galleryItems = [
    {
        id: "enterprise-software",
        title: "Enterprise Software",
        category: "Development",
        image: "/images/gallery/software-dev.png",
        width: "col-span-1 md:col-span-2",
    },
    {
        id: "mobile-experiences",
        title: "Mobile Experiences",
        category: "App Design",
        image: "/images/gallery/mobile-design.jpg",
        width: "col-span-1",
    },
    {
        id: "cloud-infrastructure",
        title: "Cloud Infrastructure",
        category: "DevOps",
        image: "/images/gallery/cloud.jpeg",
        width: "col-span-1",
    },
    {
        id: "strategic-consulting",
        title: "Strategic Consulting",
        category: "IT Strategy",
        image: "/images/gallery/consulting.png",
        width: "col-span-1 md:col-span-2",
    },
    // New Items
    {
        id: "e-commerce-platform",
        title: "E-Commerce Platform",
        category: "Web Development",
        image: "/images/gallery/software-dev.png", // Reusing image
        width: "col-span-1",
    },
    {
        id: "fintech-app",
        title: "Fintech Mobile App",
        category: "App Development",
        image: "/images/gallery/mobile-design.jpg", // Reusing image
        width: "col-span-1",
    },
    {
        id: "data-analytics",
        title: "Data Analytics Dashboard",
        category: "Data Science",
        image: "/images/gallery/cloud.jpeg", // Reusing image
        width: "col-span-1",
    },
    {
        id: "healthcare-system",
        title: "Healthcare Management",
        category: "Enterprise",
        image: "/images/gallery/consulting.png", // Reusing image
        width: "col-span-1 md:col-span-2",
    },
    {
        id: "iot-solution",
        title: "IoT Smart Home",
        category: "IoT",
        image: "/images/gallery/software-dev.png", // Reusing image
        width: "col-span-1 md:col-span-2",
    },
    {
        id: "cybersecurity-audit",
        title: "Cybersecurity Audit",
        category: "Security",
        image: "/images/gallery/cloud.jpeg", // Reusing image
        width: "col-span-1",
    },
];

export function ServicesGallery() {
    return (
        <section className="bg-background py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Our Work & References
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        A glimpse into the solutions we've delivered for our clients.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 auto-rows-[300px]">
                    {galleryItems.map((item, index) => (
                        <Link
                            href={`/?project=${item.id}`}
                            key={item.id}
                            className={cn(
                                "block h-full w-full",
                                item.width,
                                index === 1 ? "md:row-span-2" : ""
                            )}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="group relative h-full w-full overflow-hidden rounded-2xl bg-muted"
                            >
                                <div className="absolute inset-0 z-10 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />

                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />

                                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8">
                                    <span className="mb-2 text-sm font-medium text-primary-foreground/80">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-white md:text-2xl">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
