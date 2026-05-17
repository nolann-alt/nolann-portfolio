"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Asterisk } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const BASE_PATH = "/my-portfolio-next.js";

interface ProjectHeroProps {
  project: {
    image: string;
    title: string;
    shortDescription: string;
    year: number;
    tags: string[];
  };
  nextProject: { slug: string; title: string } | null;
  previousProject: { slug: string; title: string } | null;
}

/**
 * ProjectHero - En-tête d'une page projet
 * @description Affiche le visuel principal, la navigation de projet et les informations clés avec animations.
 * @component Client
 */
export default function ProjectHero({ project, nextProject, previousProject }: ProjectHeroProps) {
    // Refs pour les animations GSAP
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const starLeftRef = useRef<SVGSVGElement>(null);
    const starRightRef = useRef<SVGSVGElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);
    const descriptionRef = useRef<HTMLParagraphElement>(null);
    const yearRef = useRef<HTMLSpanElement>(null);
    const tagsRef = useRef<HTMLDivElement>(null);
    const separatorRef = useRef<HTMLDivElement>(null);

    // Animations d'apparition des éléments
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Image: reveal de bas en haut
            tl.fromTo(
                imageRef.current,
                { clipPath: "inset(100% 0% 0% 0%)" },
                { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, delay: 0.2 }
            );

            // Titre: scale depuis 0.3
            tl.fromTo(
                titleRef.current,
                { scale: 0.3, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1 },
                "-=0.8"
            );

            // Étoiles: venue depuis le centre
            tl.fromTo(
                starLeftRef.current,
                { x: -100, rotation: 180, opacity: 0 },
                { x: 0, rotation: 45, opacity: 1, duration: 1, ease: "back.out(1.5)" },
                "-=0.6"
            );
            tl.fromTo(
                starRightRef.current,
                { x: 100, rotation: -180, opacity: 0 },
                { x: 0, rotation: 45, opacity: 1, duration: 1, ease: "back.out(1.5)" },
                "<"
            );

            // Boutons: fade in avec stagger
            const buttons = containerRef.current?.querySelectorAll('.nav-item');
            if (buttons) {
                tl.fromTo(buttons, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, "-=0.4");
            }

            // Description depuis la gauche
            tl.fromTo(descriptionRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8 }, "-=0.3");

            // Année depuis la droite
            tl.fromTo(yearRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.8 }, "-=0.6");

            // Carrousel technos depuis le bas
            tl.fromTo(tagsRef.current, { opacity: 0, y: 30, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.8 }, "-=0.6");

            // Ligne de séparation
            tl.fromTo(separatorRef.current, { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 1 }, "-=0.4");
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Animation parallax au scroll
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.to(imageRef.current, {
                y: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen">
            {/* SECTION 1: IMAGE ET NAVIGATION */}
            <section className="relative w-full px-2 pt-2">
                <div ref={imageRef} className="relative w-full h-[calc(60vh-16px)] md:h-[calc(75vh-16px)] overflow-hidden">
                    <Image
                        src={`${BASE_PATH}${project.image}`}
                        alt={`${project.title} - Project showcase`}
                        fill
                        className="object-cover"
                        priority
                    />
                    <nav ref={buttonsRef} className="absolute bottom-2 left-0 right-0 flex justify-between items-center px-2 md:px-8">
                        {previousProject ? (
                            <Link href={`/projects/${previousProject.slug}`} className="nav-btn nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white font-bold mix-blend-difference">
                                <span>Back</span>
                            </Link>
                        ) : (
                            <span className="nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white/40 font-bold mix-blend-difference">Back</span>
                        )}
                        <Link href="/" className="nav-btn nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white font-bold mix-blend-difference">
                            <span>Home</span>
                        </Link>
                        {nextProject ? (
                            <Link href={`/projects/${nextProject.slug}`} className="nav-btn nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white font-bold mix-blend-difference">
                                <span>Next</span>
                            </Link>
                        ) : (
                            <span className="nav-item text-xs md:text-sm tracking-[0.25em] uppercase text-white/40 font-bold mix-blend-difference">Next</span>
                        )}
                    </nav>
                </div>
            </section>

            {/* SECTION 2: TITRE, DESCRIPTION, ANNÉE, TECHNOS */}
            <section className="px-4 mt-5 md:mt-20">
                <div className="flex items-center justify-center gap-4">
                    <Asterisk ref={starLeftRef} strokeWidth={1} className="h-10 w-10 md:h-28 md:w-28 text-[#1e1f1f] md:ml-5" style={{ rotate: "45deg" }} />
                    <h1 ref={titleRef} className="font-script text-4xl md:text-[10rem] text-gray-900 whitespace-nowrap">
                        {project.title}
                    </h1>
                    <Asterisk ref={starRightRef} strokeWidth={1} className="h-10 w-10 md:h-28 md:w-28 text-[#1e1f1f] md:ml-5" style={{ rotate: "45deg" }} />
                </div>

                <div className="text-center mt-5 md:mt-24">
                    <p ref={descriptionRef} className="text-xl md:text-5xl font-bold text-[#1e1f1f] uppercase max-w-[70vw] mx-auto">
                        {project.shortDescription}
                    </p>
                </div>

                <div className="text-center mt-3">
                    <span ref={yearRef} className="text-lg md:text-xl text-gray-900 uppercase">
                        Year: {project.year}
                    </span>
                </div>

                <div ref={tagsRef} className="mt-2 overflow-hidden w-[60vw] md:w-[20vw] mx-auto">
                    <div className="flex animate-scroll gap-8 md:gap-12 items-center justify-start">
                        {[...project.tags, ...project.tags, ...project.tags].map((tag, index) => (
                            <span key={index} className="text-xs md:text-sm text-[#1e1f1f] uppercase tracking-wider whitespace-nowrap">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <div ref={separatorRef} className="mt-20 md:mt-32 border-t-2 border-[#1e1f1f] mb-20"></div>

            <style jsx global>{`
                .nav-btn { transition: all 0.3s ease; display: inline-block; }
                .nav-btn:hover { transform: scale(1.1); }
                .nav-btn:hover span { display: inline-block; animation: textBounce 0.3s ease; }
                @keyframes textBounce { 0% { transform: translateY(0); } 50% { transform: translateY(-3px); } 100% { transform: translateY(0); } }
                .animate-scroll { animation: scroll 8s linear infinite; width: fit-content; }
                @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
            `}</style>
        </div>
    );
}