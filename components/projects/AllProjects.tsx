"use client";

import { Asterisk } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { getProjects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import { useLang } from "@/lib/i18n/useLang";
import { getDictionary } from "@/lib/i18n";

/**
 * AllProjects - Composant affichant tous les projets
 * @description Grille de tous les projets avec animation de reveal au scroll
 * @component Client
 */
export default function AllProjects() {
    const lang = useLang();
    const t = getDictionary(lang);
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

            gsap.from(".ap-subtitle", {
                y: 20, opacity: 0, duration: 0.6, ease: "power3.out", delay: 0.1,
                scrollTrigger: { trigger: ".ap-subtitle", start: "top 85%", toggleActions: "restart reverse restart reverse" }
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
                        <Asterisk strokeWidth={1} className="h-5 w-5 md:h-20 md:w-20 text-ink mr-5" />
                        <h1 className="ap-featured-title font-script text-5xl md:text-[7rem] lg:text-[10rem] tracking-tight leading-none font-light">
                            <span className="text-ink">{t.projects.allTitle1}</span>
                        </h1>
                        <Asterisk strokeWidth={1} className="h-5 w-5 md:h-20 md:w-20 text-ink ml-5" />
                    </div>
                    <p className="ap-subtitle md:-mt-4 max-w-[16rem] px-3 text-xs md:text-lg font-bold text-ink md:max-w-[28rem] text-center">
                        {t.projects.subtitle}
                    </p>
                </div>
                <h1 className="ap-projects-title font-sans text-7xl md:text-[13rem] lg:text-[22rem] leading-none uppercase font-black tracking-wide md:ml-auto">{t.projects.allTitle2}</h1>
            </div>

            <div className="grid gap-2 md:gap-6 sm:grid-cols-2">
                {getProjects(lang).map((project) => (
                    <ProjectCard key={project.id} project={project} animationClassName="ap-card" descriptionClassName="max-w-xs text-sm" lang={lang} />
                ))}
            </div>
        </section>
    );
}