"use client";

import { useEffect, useRef } from "react";
import { Asterisk } from "lucide-react";
import gsap from "gsap";
import { useLang } from "@/lib/i18n/useLang";
import { getDictionary } from "@/lib/i18n";

/**
 * ExperiencesHero - En-tête de la page Experiences
 * @description Affiche le titre grand format "My / Experiences" avec animations d'entrée.
 * @component Client (utilise useEffect pour les animations GSAP)
 */
export default function ExperiencesHero() {
    const lang = useLang();
    const t = getDictionary(lang);

    // useRef : pointe sur la section DOM pour limiter la portée des animations GSAP
    const sectionRef = useRef<HTMLElement>(null);

    // useEffect : s'exécute une seule fois après le montage du composant (tableau [] vide)
    // On y initialise les animations d'entrée GSAP
    useEffect(() => {
        // gsap.context() : scope toutes les animations à sectionRef
        // Cela permet de les nettoyer proprement avec ctx.revert() au démontage
        const ctx = gsap.context(() => {
            // gsap.from() : anime depuis un état de départ vers l'état CSS actuel
            gsap.from(".exph-script", {
                y: 60, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.1,
            });
            gsap.from(".exph-sans", {
                y: 60, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.25,
            });
            gsap.from(".exph-sub", {
                y: 20, opacity: 0, duration: 0.7, ease: "power3.out", delay: 0.45,
            });
        }, sectionRef);

        // Fonction de nettoyage : supprime toutes les animations GSAP quand le composant est démonté
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="w-[98vw] mx-auto px-0 pt-60 pb-0 md:pt-80">
            {/* Ligne titre : "My" (script) à gauche + "Experiences" (sans) à droite */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full z-10 px-4 md:pl-4 md:pr-0.5 text-center md:text-left">
                <div className="flex flex-col items-center justify-center gap-3 md:gap-4">
                    <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4">
                        <Asterisk strokeWidth={1} className="h-5 w-5 md:h-20 md:w-20 text-ink mr-2 md:mr-5" />
                        <h1 className="exph-script font-script text-5xl md:text-[7rem] lg:text-[10rem] tracking-tight leading-none font-light">
                            <span className="text-ink">{t.experiences.heroScriptWord}</span>
                        </h1>
                        <Asterisk strokeWidth={1} className="h-5 w-5 md:h-20 md:w-20 text-ink ml-2 md:ml-5" />
                    </div>
                    {/* Sous-titre positionné en dehors du flex-row pour éviter les décalages sur mobile */}
                    <p className="exph-sub md:mt-4 max-w-[16rem] px-3 text-xs md:text-lg font-bold text-ink md:max-w-[28rem] text-center">
                        {t.experiences.heroSubtitle}
                    </p>
                </div>
                
                <h1 className="exph-sans font-sans text-7xl md:text-[13rem] lg:text-[18rem] leading-none uppercase font-black tracking-wide md:ml-auto">
                    {t.experiences.heroSansWord}
                </h1>
            </div>
        </section>
    );
}
