"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BASE_PATH } from "@/lib/constants";
import { useLang } from "@/lib/i18n/useLang";
import { getDictionary } from "@/lib/i18n";

/**
 * SubjectProfile - Carte de profil (colonne gauche)
 * @description Présente les informations clés du profil : statut, école, langues, disponibilité.
 * @component Client (animations GSAP + ScrollTrigger)
 */
export default function SubjectProfile() {
    const lang = useLang();
    const t = getDictionary(lang).experiences;

    const subjectProfileRef = useRef<HTMLElement>(null);
    // useState : mémorise si l'utilisateur a tapé la photo (pour basculer N&B → couleur sur mobile)
    const [colored, setColored] = useState(false);

    // useEffect avec [] : exécuté une seule fois après le montage
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // gsap.context() scope toutes les sélections CSS à l'intérieur de subjectProfileRef
        const ctx = gsap.context(() => {

            // Lignes pointillées : s'étirent de gauche à droite (scaleX 0 → 1)
            // Même pattern que .ft-line (FormationTimeline) et .sp-line (SkillsPanel)
            gsap.utils.toArray<HTMLElement>(".subp-line").forEach((el) => {
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

            // Blocs de contenu : glissent depuis la gauche (x: -40 → 0)
            // Même pattern que .ft-slide — direction gauche car colonne gauche de la page
            gsap.utils.toArray<HTMLElement>(".subp-slide").forEach((el) => {
                gsap.fromTo(
                    el,
                    { x: -40, opacity: 0 },
                    {
                        x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
                        scrollTrigger: { trigger: el, start: "top 93%", toggleActions: "play none none reverse" },
                    }
                );
            });

            // Photo : révélation clipPath de bas en haut (spécifique à l'image)
            gsap.utils.toArray<HTMLElement>(".subp-photo").forEach((el) => {
                gsap.fromTo(
                    el,
                    { clipPath: "inset(0 0 100% 0)", opacity: 0 },
                    {
                        clipPath: "inset(0 0 0% 0)", opacity: 1, duration: 0.75, ease: "power3.out",
                        scrollTrigger: { trigger: el, start: "top 96%", toggleActions: "play none none reverse" },
                    }
                );
            });

        }, subjectProfileRef);

        // ctx.revert() : nettoie toutes les animations quand le composant est démonté
        return () => ctx.revert();
    }, []);

    return (
        // lg:sticky + lg:top-28 : sur grand écran, la carte reste visible pendant le scroll
        <aside ref={subjectProfileRef} className="subjectProfile flex flex-col w-full border border-dashed border-ink p-6 md:p-8 h-fit lg:sticky lg:top-28 lg:self-start text-black">

            <span className="subp-slide text-xs font-bold tracking-[0.3em] uppercase mb-4">
                {t.profileLabel}
            </span>

            <div className="subp-line w-full border-t border-dashed border-ink" />

            {/* Nom + Photo */}
            <div className="pt-5 pb-6">
                <h2 className="subp-slide font-sans font-black text-4xl md:text-5xl uppercase leading-[1.05] tracking-tight">
                    Nolann Lescop
                </h2>
                {/* grayscale → hover:grayscale-0 : N&B par défaut, couleur au survol */}
                <Image
                    src={`${BASE_PATH}/profil.jpg`}
                    alt="Profile picture"
                    width={400}
                    height={500}
                    onClick={() => setColored(c => !c)}
                    className={`subp-photo photo-hover-color w-full mt-4 object-cover transition-[filter] duration-500 ${colored ? "grayscale-0" : "grayscale"}`}
                />
            </div>

            <div className="subp-line w-full border-t border-dashed border-ink" />

            {/* Informations principales */}
            <div className="py-5 space-y-5 text-base">
                <div className="subp-slide">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase block mb-1.5">{t.profileStatusLabel}</span>
                    <p className="font-medium text-base md:text-lg">{t.profileStatusValue}</p>
                </div>
                <div className="subp-slide">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase block mb-1.5">{t.profileSchoolLabel}</span>
                    <p className="font-medium text-base md:text-lg">{t.profileSchoolValue}</p>
                </div>
                <div className="subp-slide flex gap-8">
                    <div>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase block mb-1.5">{t.profileLang1Label}</span>
                        <p className="font-medium text-base md:text-lg">{t.profileLang1Value}</p>
                    </div>
                    <div>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase block mb-1.5">{t.profileLang2Label}</span>
                        <p className="font-medium text-base md:text-lg">{t.profileLang2Value}</p>
                    </div>
                </div>
            </div>

            <div className="subp-line w-full border-t border-dashed border-ink" />

            {/* Badge disponibilité */}
            <div className="subp-slide pt-5">
                <div className="border border-ink p-4">
                    <div className="flex items-center gap-2 mb-2">
                        {/* animate-pulse : classe Tailwind qui fait clignoter l'élément en boucle */}
                        <span className="w-2 h-2 rounded-full bg-ink animate-pulse shrink-0" />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase">
                            {t.profileAvailabilityLabel}
                        </span>
                    </div>
                    <p className="font-black text-base md:text-lg uppercase tracking-wide">{t.profileAvailabilityValue}</p>
                    <p className="text-sm md:text-base mt-1.5 opacity-60">
                        {t.profileAvailabilityDetail}
                    </p>
                </div>
            </div>

        </aside>
    );
}
