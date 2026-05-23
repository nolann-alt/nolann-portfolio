"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type TextParagraphProps = {
    subtitle?: string;
    paragraphs?: string[][];
};

/**
 * TextParagraph - Bloc de citation/texte animé
 * @description Affiche des lignes de texte avec animation alternée gauche/droite au scroll.
 * @component Client
 */
export default function TextParagraph({ subtitle = "Thank you for your visit", paragraphs = [["Your time means a lot,", "and I hope you enjoyed", "discovering this portfolio."]] }: TextParagraphProps) {
    // useRef: référence racine utilisée comme scope des animations GSAP
    const sectionRef = useRef<HTMLElement | null>(null);

    // Animation alternée des lignes (gauche/droite)
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".text-paragraph-line").forEach((el, index) => {
                const dir = index % 2 === 0 ? -150 : 150;
                gsap.fromTo(el, { x: dir, opacity: 0 }, {
                    x: 0, opacity: 1, duration: 1.8, ease: "power3.out",
                    scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" }
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="flex flex-col items-center justify-center h-[90vh] md:min-h-[100vh] w-full px-5 relative">
            <div className="h-full w-[98vw] max-w-[2600px] grid grid-rows-[auto_1fr_auto] items-center">
                <div className="w-full flex justify-between mb-20 md:mb-56 mt-4 md:mt-8 px-4">
                    <div className="w-2 md:w-4 h-2 md:h-4 bg-ink rounded-full"></div>
                    <div className="w-2 md:w-4 h-2 md:h-4 bg-ink rounded-full"></div>
                </div>
                <div className="w-full max-w-[2200px] flex flex-col items-center text-center self-center mx-auto">
                    <span className="text-[9px] md:text-2xl uppercase mb-5 md:mb-16 text-ink">{subtitle}</span>
                    {paragraphs.map((lines, paragraphIndex) => (
                        <p key={`paragraph-${paragraphIndex}`} className={`font-bodoni text-3xl md:text-4xl lg:text-[4.5rem] xl:text-[6rem] leading-[1.3] tracking-tighter text-ink flex flex-col items-center text-center md:gap-y-12 lg:gap-y-20 ${paragraphIndex > 0 ? "mt-0 md:mt-16" : ""}`}>
                            {lines.map((line, lineIndex) => (
                                <span key={`${line}-${lineIndex}`} className="text-paragraph-line block">{line}</span>
                            ))}
                        </p>
                    ))}
                </div>
                <div className="w-full flex justify-between mt-20 md:mt-56 mb-4 md:mb-8 px-4">
                    <div className="w-2 md:w-4 h-2 md:h-4 bg-ink rounded-full"></div>
                    <div className="w-2 md:w-4 h-2 md:h-4 bg-ink rounded-full"></div>
                </div>
            </div>
        </section>
    );
}