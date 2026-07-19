"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { getFormation, getWorkExperiences } from "@/data/experiences";
import { useLang } from "@/lib/i18n/useLang";
import { getDictionary } from "@/lib/i18n";

/**
 * FormationTimeline - Timeline formation + expériences (colonne centrale)
 * @description Affiche le parcours académique puis les expériences professionnelles,
 *              séparés par des lignes pointillées, avec animations au scroll.
 * @component Client (animations GSAP + ScrollTrigger)
 */
export default function FormationTimeline() {
    const lang = useLang();
    const t = getDictionary(lang).experiences;
    const formation = getFormation(lang);
    const workExperiences = getWorkExperiences(lang);

    const ref = useRef<HTMLDivElement>(null);

    // useEffect : s'exécute une seule fois au montage ([] vide)
    // On enregistre ScrollTrigger et on configure les animations liées au scroll
    useEffect(() => {
        // ScrollTrigger : plugin GSAP qui déclenche les animations quand un élément
        // entre dans le viewport (zone visible de l'écran)
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            // Animation des lignes pointillées : s'étendent de gauche à droite (scaleX 0 → 1)
            gsap.utils.toArray<HTMLElement>(".ft-line").forEach((el) => {
                gsap.fromTo(
                    el,
                    { scaleX: 0, opacity: 0 },
                    {
                        scaleX: 1, opacity: 1, duration: 0.85, ease: "power2.out",
                        // transformOrigin : point de départ de la transformation (ici, bord gauche)
                        transformOrigin: "left center",
                        scrollTrigger: { trigger: el, start: "top 96%", toggleActions: "play none none reverse" },
                    }
                );
            });

            // Animation des blocs de contenu : glissent depuis la gauche
            // gsap.utils.toArray() : sélectionne tous les éléments .ft-slide et les parcourt
            gsap.utils.toArray<HTMLElement>(".ft-slide").forEach((el) => {
                gsap.fromTo(
                    el,
                    { x: -40, opacity: 0 },
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
        <div ref={ref} className="flex flex-col min-w-0 text-black">

            {/* ── EDUCATION ── */}
            <div className="ft-slide mb-3">
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em]">{t.educationLabel}</span>
            </div>
            <div className="ft-line w-full border-t border-dashed border-ink" />

            {/* Rendu dynamique depuis data/experiences.ts — évite de dupliquer le HTML */}
            {formation.map((item, i) => (
                <div key={i}>
                    <div className="ft-slide flex flex-col md:flex-row gap-4 py-8 md:py-12">
                        {/* Colonne gauche : période */}
                        <div className="md:w-2/5 shrink-0">
                            <span className="font-script text-3xl md:text-4xl leading-none">
                                {item.period}
                            </span>
                        </div>
                        {/* Colonne droite : détails */}
                        <div className="md:w-3/5">
                            <h3 className="font-bold text-base md:text-xl uppercase tracking-[0.1em]">
                                {item.degree}
                            </h3>
                            <p className="text-base md:text-xl mt-1.5">{item.school}</p>
                            <p className="text-sm mt-0.5 italic opacity-60">{item.location}</p>
                            {item.details && (
                                <ul className="mt-4 space-y-1.5">
                                    {item.details.map((d, j) => (
                                        <li key={j} className="text-base md:text-xl font-medium">• {d}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="ft-line w-full border-b border-dashed border-ink" />
                </div>
            ))}

            {/* ── EXPERIENCE ── */}
            <div className="ft-slide mt-14 mb-3">
                <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em]">{t.experienceLabel}</span>
            </div>
            <div className="ft-line w-full border-t border-dashed border-ink" />

            {workExperiences.map((exp, i) => (
                <div key={i}>
                    <div className="ft-slide flex flex-col md:flex-row gap-4 py-8 md:py-12">
                        {/* Colonne gauche : année + badge de type */}
                        <div className="md:w-2/5 shrink-0 flex flex-col gap-2">
                            <span className="font-script text-3xl md:text-4xl leading-none">
                                {exp.year}
                            </span>
                            {/* Badge "Academic" ou "Internship" */}
                            <span className="text-xs tracking-[0.15em] uppercase border border-ink px-2 py-1 w-fit">
                                {exp.type}
                            </span>
                        </div>
                        {/* Colonne droite : rôle, entreprise, description */}
                        <div className="md:w-3/5">
                            <h3 className="font-bold text-base md:text-xl uppercase tracking-[0.1em]">
                                {exp.role}
                            </h3>
                            <p className="text-base md:text-xl mt-1.5">{exp.company}</p>
                            <ul className="mt-4 space-y-1.5">
                                {exp.description.map((d, j) => (
                                    <li key={j} className="text-base md:text-xl font-medium">• {d}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="ft-line w-full border-b border-dashed border-ink" />
                </div>
            ))}
        </div>
    );
}
