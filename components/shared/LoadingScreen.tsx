"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
    const [hidden, setHidden] = useState(false);

    const wrapperRef    = useRef<HTMLDivElement>(null);
    const mergedRef     = useRef<HTMLDivElement>(null);
    const leftRef       = useRef<HTMLDivElement>(null);
    const rightRef      = useRef<HTMLDivElement>(null);
    const circleWrapRef = useRef<HTMLDivElement>(null);
    const circleRef     = useRef<SVGCircleElement>(null);
    const counterRef    = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const radius        = 115;
        const circumference = 2 * Math.PI * radius;
        const MAX_BEFORE_WAIT = 88;

        // ── État initial : seul le texte fusionné est visible ──
        gsap.set([leftRef.current, rightRef.current, circleWrapRef.current], { opacity: 0 });
        gsap.set(circleRef.current, {
            strokeDasharray:  circumference,
            strokeDashoffset: circumference,
        });

        const updateUI = (value: number) => {
            if (counterRef.current)
                counterRef.current.textContent = `${Math.round(value)}%`;
            if (circleRef.current)
                circleRef.current.style.strokeDashoffset = String(
                    circumference - (value / 100) * circumference
                );
        };

        // Chargement réel : résout quand la fenêtre a fini de charger (images, polices…)
        let pageReady = document.readyState === "complete";
        if (!pageReady)
            window.addEventListener("load", () => { pageReady = true; }, { once: true });

        // ── Phase 4 : 88 → 100 puis lancer la fusion ──
        const completeTo100 = () => {
            const p = { value: MAX_BEFORE_WAIT };
            gsap.to(p, {
                value: 100,
                duration: 0.5,
                ease: "power2.in",
                onUpdate: () => updateUI(p.value),
                onComplete: startMerge,
            });
        };

        // ── Phase 5 : les labels se refusionnent au centre, puis glissement vers le haut ──
        const startMerge = () => {
            const lRect = leftRef.current!.getBoundingClientRect();
            const rRect = rightRef.current!.getBoundingClientRect();
            const cx    = window.innerWidth / 2;
            // Déplacement nécessaire pour centrer chaque label
            const moveL = cx - (lRect.left + lRect.width  / 2);
            const moveR = cx - (rRect.left  + rRect.width / 2);

            const tl = gsap.timeline({ onComplete: () => setHidden(true) });

            // Cercle disparaît
            tl.to(circleWrapRef.current, { opacity: 0, duration: 0.25, ease: "power2.in" });

            // Labels glissent vers le centre et s'estompent
            tl.to(leftRef.current,  { x: moveL, opacity: 0, duration: 0.5, ease: "power3.inOut" }, "<");
            tl.to(rightRef.current, { x: moveR, opacity: 0, duration: 0.5, ease: "power3.inOut" }, "<");

            // Texte fusionné réapparaît
            tl.to(mergedRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" }, "-=0.1");

            // Courte pause pour laisser le temps de lire
            tl.to({}, { duration: 0.3 });

            // Glissement vers le haut — barre invisible qui pousse l'écran
            tl.to(wrapperRef.current, {
                yPercent: -100,
                duration: 0.75,
                ease: "power3.inOut",
            });
        };

        // ── Séquence d'ouverture ──
        const tl = gsap.timeline();

        // Phase 1 : bref flash de l'état fusionné
        tl.to({}, { duration: 0.35 });

        // Phase 2 : séparation — texte fusionné disparaît, labels + cercle apparaissent
        tl.to(mergedRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" });
        tl.to(circleWrapRef.current, { opacity: 1, duration: 0.3, ease: "power2.out" }, "<");
        tl.fromTo(
            leftRef.current,
            { x: "30vw", opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
            "<"
        );
        tl.fromTo(
            rightRef.current,
            { x: "-30vw", opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" },
            "<"
        );

        // Phase 3 : compteur 0 → MAX_BEFORE_WAIT, puis attend le vrai chargement
        tl.call(() => {
            const p = { value: 0 };
            gsap.to(p, {
                value: MAX_BEFORE_WAIT,
                duration: 1.8,
                ease: "power1.inOut",
                onUpdate: () => updateUI(p.value),
                onComplete: () => {
                    if (pageReady) {
                        completeTo100();
                    } else {
                        const check = setInterval(() => {
                            if (pageReady) { clearInterval(check); completeTo100(); }
                        }, 100);
                        setTimeout(() => { clearInterval(check); completeTo100(); }, 5000);
                    }
                },
            });
        });
    }, []);

    if (hidden) return null;

    return (
        <div ref={wrapperRef} className="fixed inset-0 z-[9999] bg-ink overflow-hidden pointer-events-none">

            {/* ── État fusionné (début + fin) ── */}
            <div ref={mergedRef} className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-1">
                    <span className="text-cream/50 text-[10px] md:text-sm tracking-[0.3em] font-sans">
                        ( 2026 )
                    </span>
                    <span className="text-cream text-[10px] md:text-sm tracking-[0.25em] font-bold uppercase">
                        Nolann Lescop Portfolio
                    </span>
                </div>
            </div>

            {/* ── Label gauche ── */}
            <div ref={leftRef} className="absolute inset-y-0 left-8 md:left-14 flex items-center opacity-0">
                <div className="flex flex-col gap-1">
                    <span className="text-cream/50 text-[10px] md:text-sm tracking-widest md:tracking-[0.3em] font-sans">( 20</span>
                    <span className="text-cream text-[10px] md:text-sm tracking-widest md:tracking-[0.25em] font-bold uppercase">
                        Nolann Lescop
                    </span>
                </div>
            </div>

            {/* ── Cercle SVG + compteur ── */}
            <div ref={circleWrapRef} className="absolute inset-0 flex items-center justify-center opacity-0">
                <div className="relative flex items-center justify-center w-[100px] h-[100px] md:w-[260px] md:h-[260px]">
                    <svg viewBox="0 0 260 260" className="absolute inset-0 w-full h-full -rotate-90">
                        <circle cx="130" cy="130" r={115} fill="none" stroke="white" strokeWidth="0.75" opacity="0.15" />
                        <circle ref={circleRef} cx="130" cy="130" r={115} fill="none" stroke="white" strokeWidth="0.75" />
                    </svg>
                    <span ref={counterRef} className="font-script text-cream text-3xl md:text-6xl select-none">
                        0%
                    </span>
                </div>
            </div>

            {/* ── Label droite ── */}
            <div ref={rightRef} className="absolute inset-y-0 right-8 md:right-14 flex items-center opacity-0">
                <div className="flex flex-col gap-1 items-end">
                    <span className="text-cream/50 text-[10px] md:text-sm tracking-widest md:tracking-[0.3em] font-sans">26 )</span>
                    <span className="text-cream text-[10px] md:text-sm tracking-widest md:tracking-[0.25em] font-bold uppercase">
                        Portfolio
                    </span>
                </div>
            </div>

        </div>
    );
}
