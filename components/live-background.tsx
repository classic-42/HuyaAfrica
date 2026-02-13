"use client";

import { useEffect, useRef } from "react";

export function LiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let particles: Particle[] = [];
        const particleCount = 50;
        const connectionDistance = 200;
        const mouseParams = { x: 0, y: 0, radius: 250 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseParams.x = e.clientX - rect.left;
            mouseParams.y = e.clientY - rect.top;
        };
        window.addEventListener("mousemove", handleMouseMove);

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;

            constructor() {
                this.x = Math.random() * canvas!.width;
                this.y = Math.random() * canvas!.height;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.size = Math.random() * 3 + 2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;

                const dx = mouseParams.x - this.x;
                const dy = mouseParams.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseParams.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const maxDistance = mouseParams.radius;
                    const force = (maxDistance - distance) / maxDistance;
                    const directionX = forceDirectionX * force * 1.5;
                    const directionY = forceDirectionY * force * 1.5;

                    this.vx -= directionX * 0.05;
                    this.vy -= directionY * 0.05;
                } else {
                    if (Math.abs(this.vx) > 0.4) this.vx *= 0.99;
                    if (Math.abs(this.vy) > 0.4) this.vy *= 0.99;
                }
            }

            draw() {
                if (!ctx) return;
                const brandColors = [
                    getComputedStyle(document.documentElement).getPropertyValue('--brand-orange').trim(),
                    getComputedStyle(document.documentElement).getPropertyValue('--brand-purple').trim(),
                    getComputedStyle(document.documentElement).getPropertyValue('--brand-magenta').trim()
                ];
                ctx.fillStyle = brandColors[Math.floor(Math.random() * brandColors.length)] || "#A91642";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });

            const magentaColor = getComputedStyle(document.documentElement).getPropertyValue('--brand-magenta').trim() || "#A91642";

            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        ctx.beginPath();
                        const opacity = 1 - distance / connectionDistance;
                        ctx.strokeStyle = `rgba(169, 22, 66, ${opacity * 0.4})`; // Keeping the RGBA for smooth opacity transition, but referencing the color intent
                        ctx.lineWidth = 1.2;
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full pointer-events-none"
            style={{ background: "transparent" }}
        />
    );
}
