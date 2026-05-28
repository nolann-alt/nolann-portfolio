"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BASE_PATH } from "@/lib/constants";
import { useLang } from "@/lib/i18n/useLang";
import { getDictionary } from "@/lib/i18n";

interface ProjectNavigationProps {
    nextProject: { slug: string; title: string; image: string } | null;
    previousProject: { slug: string; title: string; image: string } | null;
}

/**
 * ProjectNavigation - Navigation entre projets
 * @description Propose les liens vers le projet précédent/suivant avec aperçu visuel.
 * @component Client
 */
export default function ProjectNavigation({ nextProject, previousProject }: ProjectNavigationProps) {
    const lang = useLang();
    const t = getDictionary(lang);
    const imageContainerRef = useRef<HTMLDivElement>(null);

    // Retirer le grayscale quand l'image est visible dans le viewport
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            const imageContainer = imageContainerRef.current;
            if (imageContainer) {
                ScrollTrigger.create({
                    trigger: imageContainer,
                    start: "top 80%",
                    end: "bottom 20%",
                    onEnter: () => imageContainer.classList.remove("grayscale"),
                    onLeave: () => imageContainer.classList.add("grayscale"),
                    onEnterBack: () => imageContainer.classList.remove("grayscale"),
                    onLeaveBack: () => imageContainer.classList.add("grayscale"),
                });
            }
        });
        return () => ctx.revert();
    }, []);

    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            {/* Points en haut */}
            <div className="flex justify-between items-center px-4 mt-4 md:mt-8">
                <div className="w-2 md:w-4 h-2 md:h-4 bg-ink rounded-full"></div>
                <div className="w-2 md:w-4 h-2 md:h-4 bg-ink rounded-full"></div>
            </div>

            {/* Navigation projet */}
            <div className="flex items-center justify-center py-8">
                <div className="w-[70%] md:w-[60%] lg:w-[50%]">
                    {/* Projet suivant */}
                    {nextProject ? (
                        <Link href={`/${lang}/projects/${nextProject.slug}`} className="flex justify-between items-end mb-2 group">
                            <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-ink">{t.projects.navNext}</span>
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-ink group-hover:translate-x-1 transition-transform" />
                        </Link>
                    ) : (
                        <div className="flex justify-between items-end mb-2 opacity-40">
                            <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-ink">{t.projects.navNext}</span>
                            <ChevronRight className="w-6 h-6 md:w-8 md:h-8 text-ink" />
                        </div>
                    )}

                    {/* Image centrale */}
                    {nextProject ? (
                        <Link href={`/${lang}/projects/${nextProject.slug}`} className="block">
                            <div ref={imageContainerRef} className="relative aspect-video overflow-hidden grayscale transition-all duration-500">
                                <Image src={`${BASE_PATH}${nextProject.image}`} alt={nextProject.title} fill className="object-cover" />
                            </div>
                        </Link>
                    ) : (
                        <div className="relative aspect-video bg-[#e5e5e0] flex items-center justify-center">
                            <span className="text-ink font-bold uppercase text-sm md:text-3xl">{t.projects.navEnd}</span>
                        </div>
                    )}

                    {/* Projet précédent */}
                    {previousProject ? (
                        <Link href={`/${lang}/projects/${previousProject.slug}`} className="flex justify-between items-start mt-2 group">
                            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-ink group-hover:-translate-x-1 transition-transform" />
                            <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-ink">{t.projects.navPrevious}</span>
                        </Link>
                    ) : (
                        <div className="flex justify-between items-start mt-2 opacity-40">
                            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 text-ink" />
                            <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter text-ink">{t.projects.navPrevious}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Points en bas */}
            <div className="flex justify-between items-center px-4 mb-4 md:mb-8">
                <div className="w-2 md:w-4 h-2 md:h-4 bg-ink rounded-full"></div>
                <div className="w-2 md:w-4 h-2 md:h-4 bg-ink rounded-full"></div>
            </div>
        </div>
    );
}