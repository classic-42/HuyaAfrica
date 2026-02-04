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
            <svg viewBox="0 0 180 180" fill="none" className="w-full h-full drop-shadow-2xl">
                <rect width="180" height="180" rx="37" fill="white" fillOpacity="0.1" stroke="white" strokeOpacity="0.2" strokeWidth="2" />
                <g style={{ transform: "scale(90%)", transformOrigin: "center" }}>
                    <path
                        fill="white"
                        fillOpacity="0.8"
                        d="M101.141 53H136.632C151.023 53 162.689 64.6662 162.689 79.0573V112.904H148.112V79.0573C148.112 78.7105 148.098 78.3662 148.072 78.0251L112.581 112.898C112.701 112.902 112.821 112.904 112.941 112.904H148.112V126.672H112.941C98.5504 126.672 86.5638 114.891 86.5638 100.5V66.7434H101.141V100.5C101.141 101.15 101.191 101.792 101.289 102.422L137.56 66.7816C137.255 66.7563 136.945 66.7434 136.632 66.7434H101.141V53Z"
                    />
                    <path
                        fill="white"
                        fillOpacity="0.8"
                        d="M65.2926 124.136L14 66.7372H34.6355L64.7495 100.436V66.7372H80.1365V118.47C80.1365 126.278 70.4953 129.958 65.2926 124.136Z"
                    />
                </g>
            </svg>
        </motion.div>
    );
}
