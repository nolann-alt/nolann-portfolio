/**
 * Page About - Présentation détaillée de Nolann
 * @description Sections: About Me (parallax), Philosophy & Vision, Background (story, certifs), CTA
 * @route /about
 * @component Client - Animations GSAP complexes
 */

"use client";

import PageEndSection from "@/components/shared/PageEndSection";
import TextParagraph from "@/components/shared/TextParagraph";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BASE_PATH } from "@/lib/constants";

// Types pour les données de la section Background
type TableItem = { subject: string; source: string };
type ListItem = { title: string; subtitle: string; date: string };

// Données pour la section Background
const backgroundData: { id: string; category: string; type: string; image?: string; content?: string[]; headers?: string[]; items?: TableItem[] | ListItem[] }[] = [
    { id: "01", category: "MY STORY", type: "text", image: `${BASE_PATH}/profil.jpg`, content: ["My name is Nolann Lescop. I am a Computer Science student at the IUT of Vannes, deeply passionate about web development, backend architecture, and new technologies.", "I am currently exploring various fields of IT to discover my greatest interests, with a strong focus on innovation and solving complex technical challenges.", "Outside of coding, you'll likely find me on my bike, as I am an avid cyclist who enjoys the discipline and endurance the sport requires.", "My current goal is to secure an internship where I can apply my academic knowledge to professional projects and continue growing as a software engineer."] },
    { id: "02", category: "CERTIFICATIONS", type: "table", headers: ["SUBJECT", "SOURCE"], items: [{ subject: "Web Development (React & Next.js)", source: "Self-taught / Projects" }, { subject: "Backend Architecture (Node.js/Java)", source: "IUT Vannes" }, { subject: "Database Management (SQL/NoSQL)", source: "IUT Vannes" }, { subject: "Version Control (Git/GitHub)", source: "Professional workflow" }] },
    { id: "03", category: "RECOGNITIONS", type: "list", items: [{ title: "IUT PROJECTS", subtitle: "Top of Class - Backend Module", date: "2024" }, { title: "HACKATHON", subtitle: "Participation & Finalist", date: "2023" }] }
];

export default function AboutPage() {
    const sectionRef = useRef<HTMLElement>(null);
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const aboutTextRef = useRef<HTMLHeadingElement>(null);
    const meTextRef = useRef<HTMLHeadingElement>(null);
    const backgroundSectionRef = useRef<HTMLElement>(null);
    const ctaSectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();

        const tl = gsap.timeline();

        // Animation d'entrée de la section About
        if (aboutTextRef.current) {
            tl.fromTo(aboutTextRef.current, { y: 150, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, ease: "power4.out", delay: 0.2 });
        }
        if (meTextRef.current) {
            tl.fromTo(meTextRef.current, { y: 200, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, ease: "power4.out" }, "-=1.1");
        }
        if (imageContainerRef.current) {
            tl.fromTo(imageContainerRef.current, { y: 180, opacity: 0 }, { y: 0, opacity: 1, duration: 1.6, ease: "power4.out" }, "-=0.9");
        }

        // Parallaxe sur l'image
        if (imageRef.current && sectionRef.current) {
            gsap.to(imageRef.current, { y: "25%", ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1.8 } });
        }

        // Animation alternée des lignes de citation
        gsap.utils.toArray<HTMLElement>(".text-paragraph-line").forEach((el, index) => {
            const dir = index % 2 === 0 ? -150 : 150;
            gsap.fromTo(el, { x: dir, opacity: 0 }, { x: 0, opacity: 1, duration: 1.8, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none reverse" } });
        });

        // Animations de la section Background
        if (backgroundSectionRef.current) {
            gsap.fromTo(".bg-title-my", { y: 140, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power4.out", scrollTrigger: { trigger: backgroundSectionRef.current, start: "top 90%", toggleActions: "play none none reverse" } });

            gsap.utils.toArray<HTMLElement>(".bg-text-slide").forEach((el) => {
                gsap.fromTo(el, { x: -90, opacity: 0 }, { x: 0, opacity: 1, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 92%", toggleActions: "play none none reverse" } });
            });

            gsap.utils.toArray<HTMLElement>(".bg-line").forEach((el) => {
                gsap.fromTo(el, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.85, ease: "power2.out", transformOrigin: "left center", scrollTrigger: { trigger: el, start: "top 95%", toggleActions: "play none none reverse" } });
            });

            gsap.utils.toArray<HTMLElement>(".bg-photo").forEach((el) => {
                gsap.fromTo(el, { clipPath: "inset(0 0 100% 0)", opacity: 0 }, { clipPath: "inset(0 0 0% 0)", opacity: 1, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 96%", toggleActions: "play none none reverse" } });
            });
        }

        // Animation de la section CTA
        if (ctaSectionRef.current) {
            gsap.fromTo(".cta-reveal", { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: ctaSectionRef.current, start: "top 90%", toggleActions: "play none none reverse" } });

            mm.add("(max-width: 767px)", () => {
                gsap.fromTo(".cta-underline", { scaleX: 0 }, { scaleX: 1, duration: 0.7, ease: "power2.out", transformOrigin: "left center", scrollTrigger: { trigger: ctaSectionRef.current, start: "top 90%", toggleActions: "play none none reverse" } });
            });
        }

        return () => { mm.revert(); ScrollTrigger.getAll().forEach(t => t.kill()); };
    }, []);

    return (
        <main className="relative overflow-hidden">
            {/* Section 1: About Me */}
            <section ref={sectionRef} className="flex flex-col items-center justify-center min-h-screen p-1 md:p-2 w-full pt-64 md:pt-60">
                <div className="w-[98vw] max-w-[2600px] flex flex-col items-center">
                    <div className="flex justify-between items-end w-full z-10 px-4 md:px-12 -mb-2 md:-mb-6 lg:-mb-10">
                        <h1 ref={aboutTextRef} className="font-script text-7xl md:text-[9rem] lg:text-[13rem] tracking-tight leading-none font-light"><span className="text-ink">About</span></h1>
                        <h1 ref={meTextRef} className="font-sans text-7xl md:text-[17rem] lg:text-[27rem] leading-none uppercase font-black tracking-wide">ME</h1>
                    </div>
                    <div ref={imageContainerRef} className="w-full border-b border-ink/20 overflow-hidden relative">
                        <div className="w-full h-[400px] md:h-[800px] overflow-hidden relative">
                            <img ref={imageRef} src={`${BASE_PATH}/velo/velo-2.png`} className="absolute top-[-25%] left-0 w-full h-[150%] object-cover" alt="Portrait immersif - Nolann Lescop" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Citation */}
            <TextParagraph subtitle="Philosophy & Vision" paragraphs={[["The field of computer science is", "constantly evolving, full of,"], ["challenges and innovations, and", "shaped by lifelong learning."]]} />

            {/* Section 3: Background */}
            <section ref={backgroundSectionRef} className="flex flex-col items-center justify-start min-h-screen p-5 w-full pt-40 mb-20 md:mb-80 mt-0 md:mt-60">
                <div className="w-full flex flex-col items-center px-1 md:px-2">
                    <div className="flex flex-row justify-between items-end w-full z-10 mb-10 md:mb-16 whitespace-nowrap px-0.5 md:px-1">
                        <h1 className="bg-title-my font-sans text-[clamp(5.5rem,14vw,7.5rem)] md:text-[20rem] lg:text-[24rem] leading-none uppercase tracking-wide -ml-5 md:-ml-10">MY</h1>
                        <h1 className="font-script text-[clamp(3rem,8vw,5.5rem)] md:text-[10rem] lg:text-[13rem] tracking-tight leading-none md:pr-10"><span className="text-ink">Background</span></h1>
                    </div>
                    <div className="w-full">
                        <div className="w-full flex">
                            <div className="hidden md:block md:w-1/6"></div>
                            <div className="bg-line w-full md:w-5/6 border-t border-dashed border-ink"></div>
                        </div>
                        {backgroundData.map((section) => (
                            <div key={section.id} className="flex flex-col md:flex-row w-full gap-8 md:gap-4">
                                <div className="hidden md:block md:w-1/6"></div>
                                <div className="w-full md:w-5/6 flex flex-col text-black">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/3 flex flex-col items-start px-4 md:pl-0 md:pr-10 py-6 md:py-12">
                                            <h2 className="bg-text-slide text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-3 md:mb-8">{section.category}</h2>
                                            {section.image && (
                                                <div className="bg-photo bg-photo-reveal relative hidden md:block w-full max-w-[200px] aspect-square overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-ink/10">
                                                    <img src={section.image} alt="Portrait" className="w-full h-full object-cover" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="w-full md:w-2/3 flex justify-end pt-4 md:pt-12 pb-0">
                                            <div className="bg-text-slide w-full md:w-3/4 px-4 md:px-10">
                                                {section.type === "text" && section.content && (
                                                    <div className="space-y-5 md:space-y-8">
                                                        {section.content.map((para, i) => (<p key={i} className="text-base md:text-xl lg:text-2xl font-medium leading-[1.25]">{para}</p>))}
                                                    </div>
                                                )}
                                                {section.type === "table" && (
                                                    <div className="w-full">
                                                        <div className="grid grid-cols-2 border-b border-dashed border-ink pb-4 mb-8 text-[10px] md:text-sm font-bold tracking-[0.2em]">
                                                            <span>{section.headers?.[0]}</span><span className="text-right">{section.headers?.[1]}</span>
                                                        </div>
                                                        <div className="space-y-5 md:space-y-8">
                                                            {section.items?.filter((item): item is TableItem => 'subject' in item).map((item, i) => (
                                                                <div key={i} className="grid grid-cols-2 group cursor-default">
                                                                    <span className="text-sm md:text-xl lg:text-2xl font-medium transition-colors">• {item.subject}</span>
                                                                    <span className="text-right text-sm md:text-xl lg:text-2xl font-medium italic">{item.source}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                                {section.type === "list" && (
                                                    <div className="space-y-8 md:space-y-14">
                                                        {section.items?.filter((item): item is ListItem => 'title' in item).map((item, i) => (
                                                            <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-dashed border-ink pb-8 md:pb-12 group">
                                                                <div className="flex flex-col">
                                                                    <h3 className="text-xs md:text-sm font-bold mb-2 md:mb-3">{item.title}</h3>
                                                                    <span className="text-lg md:text-2xl lg:text-3xl font-medium transition-colors">• {item.subtitle}</span>
                                                                </div>
                                                                <span className="text-sm md:text-xl mt-4 md:mt-0 font-script">{item.date}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-line w-full border-b border-dashed border-ink"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: CTA */}
            <PageEndSection ref={ctaSectionRef} />
        </main>
    );
}