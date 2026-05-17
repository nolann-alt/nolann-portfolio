"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Asterisk, Menu, X } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const BASE_PATH = "/my-portfolio-next.js";

/**
 * Navbar - Barre de navigation principale
 * @description Gère un menu plein écran animé et adapte l'affichage selon la route courante.
 * @component Client
 */
export const Navbar: React.FC = () => {
    const pathname = usePathname();
    const isProjectPage = pathname.startsWith('/projects/');

    // État pour le menu mobile
    const [menuOpen, setMenuOpen] = useState(false);
    const menuPcRef = useRef<HTMLElement | null>(null);

    // Classes conditionnelles selon la page et l'état du menu
    const containerClass = isProjectPage ? "hidden" : `absolute md:fixed top-4 left-0 inset-x-0 z-50 grid grid-cols-2 md:grid-cols-3 items-center p-5 md:px-[3%] ${menuOpen ? "" : "mix-blend-difference text-white"}`;

    // useEffect: lance les animations d'entrée uniquement quand le menu devient visible
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (!menuOpen) return;

        const ctx = gsap.context(() => {
            // Étoiles: venue depuis les côtés
            gsap.fromTo(".star-left", { x: 200, rotation: -360, opacity: 0 }, { x: 0, rotation: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 });
            gsap.fromTo(".star-right", { x: -200, rotation: 360, opacity: 0 }, { x: 0, rotation: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 });

            // Titre Portfolio: zoom léger
            gsap.fromTo(".linkTitre", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "expo.out", delay: 0.3 });

            // Ligne: apparition
            gsap.fromTo(".menu-line", { scaleX: 0 }, { scaleX: 1, ease: "power3.out", duration: 1.2, delay: 0.4, transformOrigin: "center" });

            // Liens: montée avec stagger
            gsap.fromTo(".linkHome", { y: 20, opacity: 0 }, {
                y: 0, opacity: 1, duration: 0.8, delay: 0.6, stagger: 0.1, ease: "power4.out",
                onComplete: () => { gsap.set(".linkHome", { clearProps: "y" }); }
            });
        });

        return () => ctx.revert();
    }, [menuOpen]);

    // useEffect: réinitialise visuellement les éléments quand le menu se ferme
    useEffect(() => {
        if (!menuOpen) {
            const timer = setTimeout(() => {
                gsap.set(".star-left, .star-right, .linkTitre, .linkHome", { opacity: 0 });
                gsap.set(".menu-line", { scaleX: 0 });
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [menuOpen]);

    return (
        <nav className={containerClass}>
            <a href="#" className="font-bold text-3xl md:text-2xl whitespace-nowrap">
                Nolann&apos;s <span>Portfolio</span>
            </a>

            <button className="btn btn-ghost text-2xl hidden md:block md:justify-self-center" onClick={() => setMenuOpen(true)}>
                MENU
            </button>
            <button className="btn btn-md btn-ghost md:hidden text-xl justify-self-end" onClick={() => setMenuOpen(true)}>
                <Menu size={35} />
            </button>

            {/* Menu fullscreen */}
            <section ref={menuPcRef} className={`fixed inset-0 bg-[#1e1f1f] text-[#f4f4f3] mix-blend-normal flex flex-col items-center justify-center transition-all duration-500 ease-in-out z-50 overflow-hidden
                ${menuOpen ? "translate-x-0 translate-y-0 pointer-events-auto opacity-100" : "max-md:translate-x-full md:-translate-y-full pointer-events-none opacity-0"}`}>

                <button className="absolute top-5 right-8 md:right-auto btn btn-ghost text-2xl" onClick={() => setMenuOpen(false)}>
                    <span className="hidden md:inline">CLOSE</span>
                    <X size={35} className="md:hidden" />
                </button>

                <div className="flex flex-col justify-center w-full mt-14">
                    <div className="flex justify-center items-center gap-6 md:gap-10">
                        <Asterisk size={45} className="star-left opacity-0" />
                        <h1 className="linkTitre text-[#f4f4f3] text-5xl md:text-9xl font-bold">Portfolio</h1>
                        <Asterisk size={45} className="star-right opacity-0" />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-sm font-bold">PAGES</h1>
                        <div className="menu-line w-[95%] border-t-2 border-dashed border-[#f4f4f3]/60 opacity-70 my-4 mx-0.5"></div>
                        <div>
                            <Link href="/" onClick={() => setMenuOpen(false)} className="linkHome opacity-0 text-[#f4f4f3] font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-9xl transition-transform duration-300 hover:scale-110 inline-block origin-center">HOME </Link>
                        </div>
                        <div>
                            <Link href="/about" onClick={() => setMenuOpen(false)} className="linkHome opacity-0 text-[#f4f4f3] font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-9xl transition-transform duration-300 hover:scale-110 inline-block origin-center">ABOUT ME </Link>
                        </div>
                        <div>
                            <Link href="/experiences" onClick={() => setMenuOpen(false)} className="linkHome opacity-0 text-[#f4f4f3] font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-9xl transition-transform duration-300 hover:scale-110 inline-block origin-center">
                                EXPERIENCES
                            </Link>
                        </div>
                        <div>
                            <Link href="/projects" onClick={() => setMenuOpen(false)}
                                className="linkHome opacity-0 text-[#f4f4f3] font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-9xl transition-transform duration-300 hover:scale-110 inline-block origin-center">
                                PROJECTS
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <ul className="hidden md:flex justify-end space-x-4">
                <li>
                    <a href="#" className="btn btn-ghost text-2xl">
                        Contact
                        <span></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-current"></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}