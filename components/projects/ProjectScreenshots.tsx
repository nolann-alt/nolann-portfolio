"use client";

import { useEffect, useRef, useState } from "react";
import { Asterisk, ChevronDown } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { BASE_PATH } from "@/lib/constants";
import { useLang } from "@/lib/i18n/useLang";
import { getDictionary } from "@/lib/i18n";
import type { ScreenshotItem } from "@/data/projects";
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'

interface ProjectScreenshotsProps {
    screenshots: ScreenshotItem[];
}

/**
 * ProjectScreenshots - Galerie de captures d'écran
 * @description Affiche les visuels d'un projet avec animations d'apparition.
 * @component Client
 */
export default function ProjectScreenshots({ screenshots }: ProjectScreenshotsProps) {
    const lang = useLang();
    const t = getDictionary(lang);
    const sectionRef = useRef<HTMLElement>(null);
    const asteriskLeftRef = useRef<SVGSVGElement>(null);
    const asteriskRightRef = useRef<SVGSVGElement>(null);
    const dropdownContentRef = useRef<HTMLDivElement>(null);
    const dropdownIconRef = useRef<SVGSVGElement>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true, align: "center" },
        [Autoplay()]
    )
    
        
    // Aplatit les screenshots pour gérer les cas où un screenshot est un tableau (ex: plusieurs images pour un même screenshot)
    const slides = screenshots.flatMap((screenshot) =>
        // Si screenshot est un tableau, on le retourne tel quel, sinon on le met dans un tableau pour l'aplatir 
        Array.isArray(screenshot) ? screenshot : [screenshot]
    )

    const onPrevButtonClick = () => emblaApi?.scrollPrev()
    const onNextButtonClick = () => emblaApi?.scrollNext()

    useEffect(() => {
        if (!dropdownContentRef.current || !dropdownIconRef.current) return;

        const content = dropdownContentRef.current;
        const icon = dropdownIconRef.current;

        if (isDropdownOpen) {
            gsap.set(content, { display: "flex" });
            gsap.fromTo(
                content,
                { height: 0, opacity: 0, y: -12 },
                { height: "auto", opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
            );
            gsap.to(icon, { rotate: 180, duration: 0.35, ease: "power3.out" });
        } else {
            gsap.to(icon, { rotate: 0, duration: 0.25, ease: "power3.out" });
            gsap.to(content, {
                height: 0,
                opacity: 0,
                y: -12,
                duration: 0.25,
                ease: "power3.inOut",
                onComplete: () => {
                    gsap.set(content, { display: "none" });
                },
            });
        }
    }, [isDropdownOpen]);

    // Animations GSAP à l'apparition
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            // Étoile gauche: venue depuis le centre
            gsap.fromTo(asteriskLeftRef.current, { x: -100, rotation: 180, opacity: 0 }, {
                x: 0, rotation: 45, opacity: 1, duration: 1, ease: "back.out(1.5)",
                scrollTrigger: { trigger: ".screenshots-title", start: "top 80%", toggleActions: "play none none reverse" }
            });

            // Étoile droite: venue depuis le centre
            gsap.fromTo(asteriskRightRef.current, { x: 100, rotation: -180, opacity: 0 }, {
                x: 0, rotation: 45, opacity: 1, duration: 1, ease: "back.out(1.5)",
                scrollTrigger: { trigger: ".screenshots-title", start: "top 80%", toggleActions: "play none none reverse" }
            });

            // Titre: apparition depuis le bas
            gsap.from(".screenshots-title", {
                y: 40, opacity: 0, duration: 0.6, ease: "power3.out",
                scrollTrigger: { trigger: ".screenshots-title", start: "top 80%", toggleActions: "restart reverse restart reverse" }
            });

            // Sous-titre: apparition depuis le bas
            gsap.from(".screenshots-subtitle", {
                y: 20, opacity: 0, duration: 0.6, ease: "power3.out", delay: 0.1,
                scrollTrigger: { trigger: ".screenshots-subtitle", start: "top 85%", toggleActions: "restart reverse restart reverse" }
            });

            // Images: reveal de haut en bas
            gsap.fromTo(".screenshot-card", { clipPath: "inset(0 0 100% 0)", y: -20, opacity: 0 }, {
                clipPath: "inset(0 0 0% 0)", y: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.2, stagger: { each: 0.16 },
                scrollTrigger: { trigger: ".screenshot-card", start: "top 85%", once: true }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    if (!screenshots || screenshots.length === 0) return null;

    return (
        <section ref={sectionRef} className="w-full px-0 py-12 md:py-20">
            <div className="flex flex-col md:items-center md:justify-center w-full z-10 px-4 text-center mb-10 md:mb-16">
                <div className="flex flex-col items-center">
                    <div className="flex items-center gap-3 md:gap-4">
                        <Asterisk ref={asteriskLeftRef} strokeWidth={1} className="h-5 w-5 md:h-20 md:w-20 text-ink mr-5" />
                        <h1 className="screenshots-title font-script text-5xl md:text-[10rem] lg:text-[12rem] tracking-tight leading-none font-light">
                            <span className="text-ink">{t.projects.screenshotsTitle}</span>
                        </h1>
                        <Asterisk ref={asteriskRightRef} strokeWidth={1} className="h-5 w-5 md:h-20 md:w-20 text-ink ml-5" />
                    </div>
                    <p className="screenshots-subtitle md:-mt-4 max-w-[16rem] px-3 text-xs md:text-2xl font-bold text-ink md:max-w-[28rem] text-center">
                        {t.projects.screenshotsSubtitle}
                    </p>
                </div>
            </div>

            <div className="w-full bg-page py-8">

                <div className="embla">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                        {/* Rendu des slides avec les images des screenshots */}
                        {slides.map((screenshot, index) => (
                            <div key={index} className="embla__slide">
                                <Image src={`${BASE_PATH}${screenshot}`} alt="Project screenshot" width={0} height={0} className="embla__slide__img"/>
                            </div>
                        ))}
                        </div>
                    </div>
            
                    <div className="embla__controls">
                    <div className="embla__buttons">
                        <PrevButton onClick={onPrevButtonClick} />
                        <NextButton onClick={onNextButtonClick} />
                    </div>
                    </div>
                </div>

                <div className="screenshots-dropdown w-[98vw] mx-auto mt-10">
                    <button
                        type="button"
                        onClick={() => setIsDropdownOpen((value) => !value)}
                        className="w-full screenshots-dropdown__trigger cursor-pointer list-none rounded-full border border-white bg-page px-5 py-3 text-center text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-white transition duration-200 hover:bg-white hover:text-page"
                        aria-expanded={isDropdownOpen}
                        aria-controls="screenshots-dropdown-content"
                    >
                        <span>{t.projects.carouselBtnTitle}</span>
                        <ChevronDown ref={dropdownIconRef} className="screenshots-dropdown__icon h-4 w-4 md:h-5 md:w-5" />
                    </button>

                    <div
                        id="screenshots-dropdown-content"
                        ref={dropdownContentRef}
                        className="screenshots-dropdown__content mt-6 flex flex-col gap-8"
                        style={{ display: "none", overflow: "hidden" }}
                    >
                        {screenshots.map((item, index) =>
                            typeof item === "string" ? (
                                <div key={index} className="screenshot-card relative w-full overflow-hidden bg-[#1a1a1a]">
                                    <Image src={`${BASE_PATH}${item}`} alt={`Screenshot ${index + 1}`} width={0} height={0} sizes="98vw" className="w-full h-auto max-h-[70vh] object-contain" />
                                </div>
                            ) : (
                                <div key={index} className="screenshot-card flex flex-row flex-wrap justify-center gap-3 md:gap-5 w-full bg-[#1a1a1a] p-6 md:p-10">
                                    {item.map((screenshot, i) => (
                                        <div key={i} className="w-[90vw] md:w-[20vw] min-w-[80px] shrink-0 overflow-hidden">
                                            <Image src={`${BASE_PATH}${screenshot}`} alt={`Screenshot ${index + 1}.${i + 1}`} width={0} height={0} sizes="10vw" className="w-full h-auto object-contain shadow-lg" />
                                        </div>
                                    ))}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}