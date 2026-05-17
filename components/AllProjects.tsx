"use client";

import Link from "next/link";
import { Asterisk } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { projects } from "@/data/projects";

const BASE_PATH = "/my-portfolio-next.js";

/**
 * AllProjects - Composant affichant tous les projets
 * @description Grille de tous les projets avec animation de reveal au scroll
 * @component Client
 */
export default function AllProjects() {
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Titre "All": apparition depuis le bas
            gsap.from(".ap-featured-title", {
                y: 40, opacity: 0, duration: 0.6, ease: "power3.out",
                scrollTrigger: { trigger: ".ap-featured-title", start: "top 80%", toggleActions: "restart reverse restart reverse" }
            });

            // Titre "Projects": apparition depuis le bas
            gsap.from(".ap-projects-title", {
                y: 40, opacity: 0, duration: 0.6, ease: "power3.out", delay: 0.15,
                scrollTrigger: { trigger: ".ap-projects-title", start: "top 80%", toggleActions: "restart reverse restart reverse" }
            });

            // Cartes: reveal de haut en bas avec stagger
            gsap.fromTo(".ap-card", { clipPath: "inset(0 0 100% 0)", y: -20, opacity: 0 }, {
                clipPath: "inset(0 0 0% 0)", y: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.2, stagger: { each: 0.16 },
                scrollTrigger: { trigger: ".ap-card", start: "top 85%", once: true }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-[98vw] mx-auto px-0 pt-60 pb-12 md:py-20 md:mt-80">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full z-10 px-4 md:pl-12 md:pr-0.5 -mb-2 md:-mb-6 lg:-mb-10 text-center md:text-left">
                <div className="flex flex-col items-center md:items-center md:mr-6">
                    <div className="flex items-center gap-3 md:gap-4">
                        <Asterisk strokeWidth={1} className="h-5 w-5 md:h-20 md:w-20 text-[#1e1f1f] mr-5" />
                        <h1 className="ap-featured-title font-script text-5xl md:text-[7rem] lg:text-[10rem] tracking-tight leading-none font-light">
                            <span className="text-[#1e1f1f]">All</span>
                        </h1>
                        <Asterisk strokeWidth={1} className="h-5 w-5 md:h-20 md:w-20 text-[#1e1f1f] ml-5" />
                    </div>
                </div>
                <h1 className="ap-projects-title font-sans text-7xl md:text-[13rem] lg:text-[22rem] leading-none uppercase font-black tracking-wide md:ml-auto">Projects</h1>
            </div>

            <div className="grid gap-2 md:gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                    <Link key={project.id} href={`/projects/${project.slug}`} className="block">
                        <article className="group relative overflow-hidden border border-[#1f1d1f]/15 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1">
                            <div className="ap-card relative aspect-[4/3] overflow-hidden">
                                <img src={`${BASE_PATH}${project.image}`} alt={project.title} className="h-full w-full object-contain bg-[#0f0f10] transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10]/80 via-[#0f0f10]/10 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-5 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                                    <p className="mt-2 max-w-xs text-sm text-white/80">{project.shortDescription}</p>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}