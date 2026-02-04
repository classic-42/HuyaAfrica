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
        { x: "10%", y: "15%", size: 60, delay: 0, speed: 1.2 },
        { x: "80%", y: "10%", size: 100, delay: 0.5, speed: 0.8 },
        { x: "65%", y: "75%", size: 80, delay: 1, speed: 1 },
        { x: "20%", y: "85%", size: 120, delay: 1.5, speed: 0.6 },
        { x: "90%", y: "65%", size: 50, delay: 2, speed: 1.4 },
        { x: "45%", y: "10%", size: 70, delay: 0.2, speed: 1.1 },
        { x: "55%", y: "90%", size: 90, delay: 0.8, speed: 0.9 },
        { x: "5%", y: "50%", size: 40, delay: 1.2, speed: 1.5 },
        { x: "95%", y: "40%", size: 65, delay: 1.6, speed: 1.2 },
        { x: "35%", y: "60%", size: 110, delay: 2.1, speed: 0.7 },
        { x: "70%", y: "30%", size: 55, delay: 0.4, speed: 1.3 },
        { x: "25%", y: "35%", size: 45, delay: 1.1, speed: 1.4 },
        { x: "75%", y: "55%", size: 75, delay: 1.9, speed: 1.0 },
        { x: "15%", y: "65%", size: 85, delay: 0.7, speed: 0.9 },
        { x: "85%", y: "85%", size: 105, delay: 2.5, speed: 0.75 },
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
