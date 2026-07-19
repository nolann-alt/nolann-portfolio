"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { getSkillGroups, getSoftSkills } from "@/data/experiences";
import { useLang } from "@/lib/i18n/useLang";
import { getDictionary } from "@/lib/i18n";

/**
 * SkillsPanel - Panneau de compétences (colonne droite)
 * @description Affiche les compétences techniques groupées par catégorie et les soft skills,
 *              avec animations au scroll (glissement depuis la droite).
 * @component Client (animations GSAP + ScrollTrigger)
 */
export default function SkillsPanel() {
    const lang = useLang();
    const t = getDictionary(lang).experiences;
    const skillGroups = getSkillGroups(lang);
    const softSkills = getSoftSkills(lang);

    const ref = useRef<HTMLDivElement>(null);

    // useEffect avec [] : exécuté une seule fois après le montage
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Lignes pointillées : animation scaleX (même pattern que FormationTimeline)
            gsap.utils.toArray<HTMLElement>(".sp-line").forEach((el) => {
                gsap.fromTo(
                    el,
                    { scaleX: 0, opacity: 0 },
                    {
                        scaleX: 1, opacity: 1, duration: 0.85, ease: "power2.out",
                        transformOrigin: "left center",
                        scrollTrigger: { trigger: el, start: "top 96%", toggleActions: "play none none reverse" },
                    }
                );
            });

            // Blocs de compétences : glissent depuis la droite (x: 40 → 0)
            // Notez le x positif ici (droite → gauche), contrairement à FormationTimeline (gauche → droite)
            gsap.utils.toArray<HTMLElement>(".sp-slide").forEach((el) => {
                gsap.fromTo(
                    el,
                    { x: 40, opacity: 0 },
                    {
                        x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                        scrollTrigger: { trigger: el, start: "top 93%", toggleActions: "play none none reverse" },
                    }
                );
            });
        }, ref);

        return () => ctx.revert();
    }, []);

    return (
        <aside ref={ref} className="flex flex-col min-w-0 w-full text-black">
            <div className="sp-slide mb-3">
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em]">
                    {t.skillsTitle}
                </span>
            </div>
            <div className="sp-line w-full border-t border-dashed border-ink" />

            {/* Hard skills groupés par catégorie (depuis data/experiences.ts) */}
            {skillGroups.map((group, i) => (
                <div key={i}>
                    <div className="sp-slide py-5">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-3">
                            {group.category}
                        </span>
                        {/* Tags de compétences : border simple pour les hard skills */}
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((item, j) => (
                                <span
                                    key={j}
                                    className="text-xs md:text-sm border border-ink px-2.5 py-1.5 uppercase tracking-wide leading-none"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="sp-line w-full border-b border-dashed border-ink" />
                </div>
            ))}

            {/* Soft skills : fond noir (bg-ink) pour les distinguer des hard skills */}
            <div className="sp-slide py-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-3">
                    Soft Skills
                </span>
                <div className="flex flex-wrap gap-2">
                    {softSkills.map((s, i) => (
                        <span
                            key={i}
                            className="text-xs md:text-sm bg-ink text-cream px-2.5 py-1.5 uppercase tracking-wide leading-none"
                        >
                            {s}
                        </span>
                    ))}
                </div>
            </div>
            <div className="sp-line w-full border-b border-dashed border-ink" />
        </aside>
    );
}
