"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function FloatingLogos() {
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for cursor following
    const springConfig = { damping: 25, stiffness: 150 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };

        const handleMouseMove = (e: MouseEvent) => {
            // Normalize mouse position from -0.5 to 0.5
            mouseX.set(e.clientX / window.innerWidth - 0.5);
            mouseY.set(e.clientY / window.innerHeight - 0.5);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [mouseX, mouseY]);

    // Logo positions and properties
    const logos = [
        { x: "15%", y: "20%", size: 60, delay: 0, speed: 1.2 },
        { x: "75%", y: "15%", size: 100, delay: 0.5, speed: 0.8 },
        { x: "65%", y: "70%", size: 80, delay: 1, speed: 1 },
        { x: "20%", y: "80%", size: 120, delay: 1.5, speed: 0.6 },
        { x: "85%", y: "60%", size: 50, delay: 2, speed: 1.4 },
    ];

    if (windowSize.width === 0) return null;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
            {logos.map((logo, i) => (
                <LogoItem
                    key={i}
                    logo={logo}
                    smoothX={smoothX}
                    smoothY={smoothY}
                />
            ))}
        </div>
    );
}

function LogoItem({ logo, smoothX, smoothY }: { logo: any, smoothX: any, smoothY: any }) {
    // Parallax calculations
    const translateX = useTransform(smoothX, [-0.5, 0.5], [logo.size * -0.5, logo.size * 0.5]);
    const translateY = useTransform(smoothY, [-0.5, 0.5], [logo.size * -0.5, logo.size * 0.5]);
    const rotateX = useTransform(smoothY, [-0.5, 0.5], [20, -20]);
    const rotateY = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);

    return (
        <motion.div
            style={{
                position: "absolute",
                left: logo.x,
                top: logo.y,
                width: logo.size,
                height: logo.size,
                x: translateX,
                y: translateY,
                rotateX,
                rotateY,
                perspective: 1000,
            }}
            animate={{
                y: [0, -20, 0],
            }}
            transition={{
                y: {
                    duration: 4 / logo.speed,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: logo.delay,
                },
            }}
        >
            <div className="w-full h-full relative group shadow-2xl transition-shadow duration-500">
                <div className="absolute inset-0 bg-white opacity-10 rounded-xl border border-white/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span
                        className="font-bold text-white opacity-80 select-none"
                        style={{ fontSize: logo.size * 0.5 }}
                    >
                        H
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
