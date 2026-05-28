"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BASE_PATH } from "@/lib/constants";
import { useLang } from "@/lib/i18n/useLang";
import { getDictionary } from "@/lib/i18n";

/**
 * Intro - Ouverture visuelle de la page d'accueil
 * @description Anime une vidéo hero avec effet de zoom et disparition progressive du texte au scroll.
 * @component Client
 */
const Intro: React.FC = () => {
    const lang = useLang();
    const t = getDictionary(lang);
    // Refs pour les animations GSAP
    const imageRef = useRef<HTMLImageElement | null>(null);
    const textRef = useRef<HTMLDivElement | null>(null);
    const sectionRef = useRef<HTMLElement | null>(null);
    const lineRef = useRef<HTMLDivElement | null>(null);
    const descRef = useRef<HTMLParagraphElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);

    // useEffect: calcule les dimensions et lance les animations liées au scroll après montage
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!imageRef.current || !textRef.current || !sectionRef.current || !lineRef.current) return;

        const ctx = gsap.context(() => {
            const navbarEl = document.querySelector("nav");
            const navbarBottom = navbarEl ? Math.ceil(navbarEl.getBoundingClientRect().bottom) : 96;
            const padding = 12;

            const imageEl = imageRef.current;
            if (!imageEl) return;

            const rect = imageEl.getBoundingClientRect();
            const initialWidth = rect.width;
            const initialHeight = rect.height;

            const maxWidth = window.innerWidth - padding * 2;
            const minTop = navbarBottom + padding;
            const maxHeight = window.innerHeight - minTop - padding;

            const scaleX = maxWidth / initialWidth;
            const scaleY = maxHeight / initialHeight;
            const targetScale = (window.innerWidth * 1.3) / initialWidth;
            const scaleMax = Math.min(scaleX, scaleY, targetScale, 6.0);

            const offsetY = minTop - rect.top;
            const scrollLength = window.innerHeight;

            // Texte: remonte et disparaît au scroll
            gsap.fromTo(textRef.current, { opacity: 1, y: 0 }, {
                opacity: 0, y: scrollLength * 0.55, ease: "none",
                scrollTrigger: { trigger: sectionRef.current, start: "top top", end: `+=${scrollLength}`, scrub: true }
            });

            // Image: zoom pendant le scroll
            gsap.to(imageRef.current, {
                scale: scaleMax, transformOrigin: "center top", ease: "none",
                scrollTrigger: { trigger: sectionRef.current, start: "top top", end: `+=${scrollLength - 10}`, scrub: true, pin: true, pinSpacing: true }
            });

            // Ligne: apparition progressive
            gsap.fromTo(lineRef.current, { scaleX: 0, transformOrigin: "center" }, { scaleX: 1, ease: "power2.out", duration: 1 });

            // Description: apparition depuis la droite
            gsap.fromTo(descRef.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, ease: "power2.out", duration: 1, delay: 0.3 });

            // Titre: apparition depuis la gauche
            gsap.fromTo(titleRef.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, ease: "power2.out", duration: 1, delay: 0.3 });

            // Image: apparition en opacity
            gsap.set(imageRef.current, { y: window.innerWidth < 768 ? 0 : offsetY });
            gsap.fromTo(imageRef.current, { opacity: 0 }, { opacity: 1, ease: "power2.out", duration: 1, delay: 0.3 });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="#" ref={sectionRef} className="relative h-screen overflow-hidden">
            <div className="absolute inset-0 flex flex-col justify-end items-center gap-10 mb-20 md:mb-0">
                <div ref={imageRef} className="w-[63vw] md:w-[53vw] lg:w-[43vw] aspect-[16/9] overflow-hidden shadow-xl">
                    <video src={`${BASE_PATH}/velo/Intro.mp4`} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                </div>
                <div ref={textRef} className="flex flex-col justify-center items-center">
                    <div ref={lineRef} className="w-full border-t-2 border-dashed border-ink opacity-70 my-2 md:my-8 mx-0.5"></div>
                    <p ref={descRef} className="my-4 text-2xl md:text-6xl text-center md:text-left">{t.home.role}</p>
                    <h1 ref={titleRef} className="text-5xl md:text-[12vw] font-bold text-center md:text-left -mt-2 md:mt-0">
                        Nolann <span className="text-ink">LESCOP</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Intro;