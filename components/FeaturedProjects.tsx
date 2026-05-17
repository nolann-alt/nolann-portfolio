"use client";

import Link from "next/link";
import { Asterisk } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { featuredProjects } from "@/data/projects";

const BASE_PATH = "/my-portfolio-next.js";

/**
 * FeaturedProjects - Sélection de projets mis en avant
 * @description Met en valeur quelques projets avec animations et lien vers la page complète.
 * @component Client
 */
export default function FeaturedProjects() {
    // useRef: pointe le lien "More projects" pour appliquer une animation SplitText au hover
    const learnMore = useRef<HTMLAnchorElement | null>(null);

    // useEffect: configure les animations GSAP au montage et restaure l'état initial au démontage
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(SplitText);

        const ctx = gsap.context(() => {
            // Animation au hover sur "More projects"
            const split = new SplitText(learnMore.current, { type: "chars" });
            const chars = split.chars;
            if (!chars) return;

            const enterAnim = () => {
                gsap.to(chars, { x: 10, opacity: 1, scale: 1, duration: 0.3, rotation: 10, ease: "power3.out" });
                gsap.to(".fp-arrow", { x: 10, opacity: 1, scale: 1, duration: 0.3, rotation: 10, ease: "power3.out" });
            };

            const leaveAnim = () => {
                gsap.to(chars, { opacity: 1, x: 0, scale: 1, duration: 0.3, ease: "power3.inOut", stagger: 0.05, rotation: 0 });
                gsap.to(".fp-arrow", { x: 0, opacity: 1, duration: 0.3, rotation: 0, ease: "power3.out" });
            };

            if (!learnMore.current) return;
            learnMore.current.addEventListener("mouseenter", enterAnim);
            learnMore.current.addEventListener("mouseleave", leaveAnim);

            // Titres: apparition depuis le bas
            gsap.from(".fp-featured-title", {
                y: 40, opacity: 0, duration: 0.6, ease: "power3.out",
                scrollTrigger: { trigger: ".fp-featured-title", start: "top 80%", toggleActions: "restart reverse restart reverse" }
            });

            gsap.from(".fp-subtitle", {
                y: 20, opacity: 0, duration: 0.6, ease: "power3.out", delay: 0.1,
                scrollTrigger: { trigger: ".fp-subtitle", start: "top 85%", toggleActions: "restart reverse restart reverse" }
            });

            gsap.from(".fp-projects-title", {
                y: 40, opacity: 0, duration: 0.6, ease: "power3.out", delay: 0.15,
                scrollTrigger: { trigger: ".fp-projects-title", start: "top 80%", toggleActions: "restart reverse restart reverse" }
            });

            // Cartes: reveal de haut en bas
            gsap.fromTo(".fp-card", { clipPath: "inset(0 0 100% 0)", y: -20, opacity: 0 }, {
                clipPath: "inset(0 0 0% 0)", y: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.2, stagger: { each: 0.16 },
                scrollTrigger: { trigger: ".fp-card", start: "top 85%", once: true }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="w-[98vw] mx-auto px-0 py-12 md:py-20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full z-10 px-4 md:pl-12 md:pr-0.5 -mb-2 md:-mb-6 lg:-mb-10 text-center md:text-left">
                <div className="flex flex-col items-center md:items-center md:mr-6">
                    <div className="flex items-center gap-3 md:gap-4">
                        <Asterisk strokeWidth={1} className="h-5 w-5 md:h-20 md:w-20 text-[#1e1f1f] mr-5" />
                        <h1 className="fp-featured-title font-script text-5xl md:text-[7rem] lg:text-[10rem] tracking-tight leading-none font-light">
                            <span className="text-[#1e1f1f]">Featured</span>
                        </h1>
                        <Asterisk strokeWidth={1} className="h-5 w-5 md:h-20 md:w-20 text-[#1e1f1f] ml-5" />
                    </div>
                    <p className="fp-subtitle md:-mt-4 max-w-[16rem] px-3 text-xs md:text-lg font-bold text-[#1f1d1f] md:max-w-[28rem] text-center">
                        A selection of recent projects illustrating my career in the field of computer science
                    </p>
                </div>
                <h1 className="fp-projects-title font-sans text-7xl md:text-[13rem] lg:text-[22rem] leading-none uppercase font-black tracking-wide md:ml-auto">Projects</h1>
            </div>

            <div className="grid gap-2 md:gap-6 sm:grid-cols-2">
                {featuredProjects.map((project) => (
                    <Link key={project.id} href={`/projects/${project.slug}`} className="block">
                        <article className="group relative overflow-hidden border border-[#1f1d1f]/15 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1">
                            <div className="fp-card relative aspect-[4/3] overflow-hidden">
                                <img src={`${BASE_PATH}${project.image}`} alt={project.title} className="h-full w-full object-contain bg-[#0f0f10] transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f10]/80 via-[#0f0f10]/10 to-transparent" />
                                <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-5 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                                    <p className="mt-2 max-w-base text-base text-white/80">{project.shortDescription}</p>
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>

            <div className="flex flex-col items-center mt-16 md:mt-32">
                <div className="w-[60%] border-t-2 border-dashed border-[#1e1f1f]"></div>
                <Link href="/projects" ref={learnMore} className="flex flex-row items-center gap-3 uppercase text-[#1f1d1f] py-2 font-bold text-2xl md:text-4xl">
                    <span>More</span>
                    <span className="ml-1">projects</span>
                    <span className="ml-1 fp-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>
                </Link>
                <div className="w-[60%] border-t-2 border-dashed border-[#1e1f1f] flex flex-col justify-center"></div>
            </div>
        </section>
    );
}