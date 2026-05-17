"use client";

import { useRef, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Types des propriétés
interface ProjectTech {
    category: string;
    items: string[];
}

interface ProjectLinks {
    demo?: string;
    github?: string;
}

interface AboutProjectProps {
    overview: string;
    coreFeatures: string;
    technologies: ProjectTech[];
    links: ProjectLinks;
}

/**
 * ProjectAbout - Section de détail d'un projet
 * @description Affiche l'overview, les fonctionnalités, les technologies et les liens externes.
 * @component Client
 */
export default function ProjectAbout({
    overview,
    coreFeatures,
    technologies,
    links
}: AboutProjectProps) {
    // Référence au conteneur pour les animations GSAP
    const sectionRef = useRef<HTMLElement>(null);

    // Animation GSAP à l'apparition des éléments
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Titre principal: effet de révélation depuis le bas
            gsap.fromTo(
                ".bg-title-my",
                { y: 140, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Textes et titres: effet de slide depuis la gauche
            gsap.utils.toArray<HTMLElement>(".bg-text-slide").forEach((el) => {
                gsap.fromTo(
                    el,
                    { x: -90, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.85,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 92%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Lignes horizontales: effet de drawing progressif
            gsap.utils.toArray<HTMLElement>(".bg-line").forEach((el) => {
                gsap.fromTo(
                    el,
                    { scaleX: 0, opacity: 0 },
                    {
                        scaleX: 1,
                        opacity: 1,
                        duration: 0.85,
                        ease: "power2.out",
                        transformOrigin: "left center",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 95%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });
        }, sectionRef);

        // Cleanup automatique au démontage du composant
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="flex flex-col items-center justify-start min-h-screen p-5 w-full pt-40 mb-20 md:mb-80 mt-0 md:mt-60">
            <div className="w-full flex flex-col items-center px-1 md:px-2">
                {/* Titre "ABOUT THE PROJECT" */}
                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between w-full z-10 mb-5 md:mb-8 whitespace-nowrap px-0.5 md:px-1">
                    <h1 className="bg-title-my font-sans text-7xl md:text-[20rem] lg:text-[24rem] leading-none uppercase tracking-wide md:-ml-10 text-center">
                        ABOUT
                    </h1>
                    <h1 className="font-script text-5xl md:text-[10rem] lg:text-[13rem] tracking-tight leading-none md:pr-10 text-center">
                        <span className="text-[#1e1f1f]">The Project</span>
                    </h1>
                </div>

                <div className="w-full">
                    {/* Ligne de séparation supérieure */}
                    <div className="w-full flex">
                        <div className="hidden md:block md:w-1/6"></div>
                        <div className="bg-line w-full md:w-5/6 border-t border-dashed border-[#1f1d1f]"></div>
                    </div>

                    {/* SECTION 1: OVERVIEW */}
                    <SectionBlock title="Overview" content={overview} />

                    {/* SECTION 2: CORE FEATURES */}
                    <SectionBlock content={coreFeatures} title="Core Features" />

                    {/* SECTION 3: TECHNOLOGIES */}
                    <div className="flex flex-col md:flex-row w-full gap-8 md:gap-4">
                        <div className="hidden md:block md:w-1/6"></div>
                        <div className="w-full md:w-5/6 flex flex-col text-black">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/3 flex flex-col items-start px-4 md:pl-0 md:pr-10 py-6 md:py-12">
                                    <h2 className="bg-text-slide text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-3 md:mb-8">
                                        Technologies
                                    </h2>
                                </div>
                                <div className="w-full md:w-2/3 flex justify-end pt-4 md:pt-12 pb-0">
                                    <div className="bg-text-slide w-full md:w-3/4 px-4 md:px-10">
                                        <div className="space-y-5 md:space-y-8">
                                            {technologies.map((tech, index) => (
                                                <div key={index}>
                                                    <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-2 text-[#1e1f1f]">
                                                        {tech.category}
                                                    </h3>
                                                    <div className="flex flex-wrap gap-2">
                                                        {tech.items.map((item, itemIndex) => (
                                                            <span key={itemIndex} className="text-base md:text-xl lg:text-2xl font-medium">
                                                                • {item}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-line w-full border-b border-dashed border-[#1f1d1f]"></div>
                        </div>
                    </div>

                    {/* SECTION 4: LINKS */}
                    <div className="flex flex-col md:flex-row w-full gap-8 md:gap-4">
                        <div className="hidden md:block md:w-1/6"></div>
                        <div className="w-full md:w-5/6 flex flex-col text-black">
                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/3 flex flex-col items-start px-4 md:pl-0 md:pr-10 py-6 md:py-12">
                                    <h2 className="bg-text-slide text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-3 md:mb-8">
                                        Links
                                    </h2>
                                </div>
                                <div className="w-full md:w-2/3 flex justify-end pt-4 md:pt-12 pb-0">
                                    <div className="bg-text-slide w-full md:w-3/4 px-4 md:px-10">
                                        <div className="flex flex-wrap gap-4">
                                            {links.demo && (
                                                <a
                                                    href={links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-base md:text-xl lg:text-2xl font-medium hover:underline flex items-center gap-2"
                                                >
                                                    • Demo <ArrowUpRight className="w-4 h-4" />
                                                </a>
                                            )}
                                            {links.github && (
                                                <a
                                                    href={links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-base md:text-xl lg:text-2xl font-medium hover:underline flex items-center gap-2"
                                                >
                                                    • GitHub <ArrowUpRight className="w-4 h-4" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-line w-full border-b border-dashed border-[#1f1d1f]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/**
 * SectionBlock - Bloc réutilisable pour une section texte
 * @description Uniformise la structure titre + contenu utilisée dans la page projet.
 */
function SectionBlock({ title, content }: { title: string; content: string }) {
    return (
        <div className="flex flex-col md:flex-row w-full gap-8 md:gap-4">
            <div className="hidden md:block md:w-1/6"></div>
            <div className="w-full md:w-5/6 flex flex-col text-black">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 flex flex-col items-start px-4 md:pl-0 md:pr-10 py-6 md:py-12">
                        <h2 className="bg-text-slide text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-3 md:mb-8">
                            {title}
                        </h2>
                    </div>
                    <div className="w-full md:w-2/3 flex justify-end pt-4 md:pt-12 pb-0">
                        <div className="bg-text-slide w-full md:w-3/4 px-4 md:px-10">
                            <div className="space-y-5 md:space-y-8">
                                <p className="text-base md:text-xl lg:text-2xl font-medium leading-[1.25]">
                                    {content}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-line w-full border-b border-dashed border-[#1f1d1f]"></div>
            </div>
        </div>
    );
}