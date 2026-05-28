"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Asterisk, Menu, X } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLang } from "@/lib/i18n/useLang";
import { getDictionary } from "@/lib/i18n";

/**
 * Navbar - Barre de navigation principale
 * @description Gère un menu plein écran animé et adapte l'affichage selon la route courante.
 * Inclut un switcher FR/EN pour basculer entre les deux versions du site.
 * @component Client
 */
export const Navbar: React.FC = () => {
    const pathname = usePathname();
    const lang = useLang();
    const t = getDictionary(lang);

    // isProjectPage : masque la Navbar sur les pages de détail projet
    const isProjectPage = pathname.includes("/projects/") && pathname.split("/").length > 3;

    const [menuOpen, setMenuOpen] = useState(false);
    const menuPcRef = useRef<HTMLElement | null>(null);

    const containerClass = isProjectPage
        ? "hidden"
        : `absolute md:fixed top-4 left-0 inset-x-0 z-50 grid grid-cols-2 md:grid-cols-3 items-center p-5 md:px-[3%] ${menuOpen ? "" : "mix-blend-difference text-white"}`;

    // Construit le lien vers la même page dans l'autre langue
    // Ex : /fr/about → /en/about | /en/projects → /fr/projects
    const otherLang = lang === "fr" ? "en" : "fr";
    const langSwitchHref = pathname.replace(`/${lang}`, `/${otherLang}`) || `/${otherLang}`;

    // useEffect: lance les animations d'entrée uniquement quand le menu devient visible
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        if (!menuOpen) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(".star-left", { x: 200, rotation: -360, opacity: 0 }, { x: 0, rotation: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 });
            gsap.fromTo(".star-right", { x: -200, rotation: 360, opacity: 0 }, { x: 0, rotation: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 });
            gsap.fromTo(".linkTitre", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 1.2, ease: "expo.out", delay: 0.3 });
            gsap.fromTo(".menu-line", { scaleX: 0 }, { scaleX: 1, ease: "power3.out", duration: 1.2, delay: 0.4, transformOrigin: "center" });
            gsap.fromTo(".linkHome", { y: 20, opacity: 0 }, {
                y: 0, opacity: 1, duration: 0.8, delay: 0.6, stagger: 0.1, ease: "power4.out",
                onComplete: () => { gsap.set(".linkHome", { clearProps: "y" }); }
            });
        });

        return () => ctx.revert();
    }, [menuOpen]);

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
                {t.nav.menu}
            </button>
            <button className="btn btn-md btn-ghost md:hidden text-xl justify-self-end" onClick={() => setMenuOpen(true)}>
                <Menu size={35} />
            </button>

            {/* Menu fullscreen */}
            <section ref={menuPcRef} className={`fixed inset-0 bg-ink text-cream mix-blend-normal flex flex-col items-center justify-center transition-all duration-500 ease-in-out z-50 overflow-hidden
                ${menuOpen ? "translate-x-0 translate-y-0 pointer-events-auto opacity-100" : "max-md:translate-x-full md:-translate-y-full pointer-events-none opacity-0"}`}>

                <button className="absolute top-5 right-8 md:right-auto btn btn-ghost text-2xl" onClick={() => setMenuOpen(false)}>
                    <span className="hidden md:inline">{t.nav.close}</span>
                    <X size={35} className="md:hidden" />
                </button>

                <div className="flex flex-col justify-center w-full mt-14">
                    <div className="flex justify-center items-center gap-6 md:gap-10">
                        <Asterisk size={45} className="star-left opacity-0" />
                        <h1 className="linkTitre text-cream text-5xl md:text-9xl font-bold">Portfolio</h1>
                        <Asterisk size={45} className="star-right opacity-0" />
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-sm font-bold">PAGES</h1>
                        <div className="menu-line w-[95%] border-t-2 border-dashed border-cream/60 opacity-70 my-4 mx-0.5"></div>
                        <div>
                            <Link href={`/${lang}`} onClick={() => setMenuOpen(false)} className="linkHome opacity-0 text-cream font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl transition-transform duration-300 hover:scale-110 inline-block origin-center">
                                {t.nav.home}{" "}
                            </Link>
                        </div>
                        <div>
                            <Link href={`/${lang}/about`} onClick={() => setMenuOpen(false)} className="linkHome opacity-0 text-cream font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl transition-transform duration-300 hover:scale-110 inline-block origin-center">
                                {t.nav.about}{" "}
                            </Link>
                        </div>
                        <div>
                            <Link href={`/${lang}/experiences`} onClick={() => setMenuOpen(false)} className="linkHome opacity-0 text-cream font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl transition-transform duration-300 hover:scale-110 inline-block origin-center">
                                {t.nav.experiences}
                            </Link>
                        </div>
                        <div>
                            <Link href={`/${lang}/projects`} onClick={() => setMenuOpen(false)} className="linkHome opacity-0 text-cream font-bold text-5xl sm:text-6xl md:text-8xl lg:text-9xl transition-transform duration-300 hover:scale-110 inline-block origin-center">
                                {t.nav.projects}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Liens droite : contact + switcher de langue */}
            <ul className="hidden md:flex justify-end items-center space-x-4">
                <li>
                    {/* Switcher FR / EN : lien vers la même page dans l'autre langue */}
                    <Link
                        href={langSwitchHref}
                        className="btn btn-ghost text-lg font-bold tracking-widest"
                        title={lang === "fr" ? "Switch to English" : "Passer en français"}
                    >
                        {otherLang.toUpperCase()}
                    </Link>
                </li>
                <li>
                    <a href="mailto:nolann.lescop@outlook.com" className="btn btn-ghost text-2xl">
                        {t.nav.contact}
                        <span className="w-2.5 h-2.5 rounded-full bg-current"></span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};
