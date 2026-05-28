"use client";
import {MoveRight} from "lucide-react";
import {useEffect, useRef} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useLang } from "@/lib/i18n/useLang";
import { getDictionary } from "@/lib/i18n";

/**
 * Hero - Section d'introduction
 * @returns {JSX.Element} Composant Hero avec animations d'entrée et interactions sur le bouton "Learn More"
 * @description Affiche une introduction avec animations d'entrée pour le titre, le texte et le bouton "Learn More" qui réagit au survol.
 */
const Hero: React.FC = () => {
    const lang = useLang();
    const t = getDictionary(lang);

    const sectionRef = useRef<HTMLElement | null>(null);
    const learnMore = useRef<HTMLAnchorElement | null>(null);
    const arrowRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        // On enregistre ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);
        gsap.registerPlugin(SplitText);

        const ctx = gsap.context(() => {

            gsap.fromTo(".titleSection",
                {
                    x: 100,
                    opacity: 0
                },
                {
                    x: 0,
                    ease: "power4.out",
                    opacity: 1,
                    delay: 0.3,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        toggleActions: "play none none reset", // Recharger l'animation
                    }
                }
            );

            gsap.fromTo(".titleH1",
                {
                    x: -100,
                    opacity: 0
                },
                {
                    x: 0,
                    ease: "power4.out",
                    opacity: 1,
                    delay: 0.3,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        toggleActions: "play none none reset", // Recharger l'animation
                    }
                }
            );

            gsap.fromTo(".textP",
                {
                    x: 100,
                    opacity: 0
                },
                {
                    x: 0,
                    ease: "power4.out",
                    opacity: 1,
                    duration: 1,
                    delay: 0.3,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        toggleActions: "play none none reset", // Recharger l'animation
                    }
                }
            );

            // "chars,words" : GSAP crée d'abord des wrappers de mots (qui gardent les espaces),
            // puis découpe chaque mot en caractères individuels pour l'animation
            const split = new SplitText(learnMore.current, { type: "chars,words" });
            const chars = split.chars;
            if(!chars) return;

            const enterAnim = () => {
                gsap.to(chars, {
                    x: 10,
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    rotation: 10,
                    ease: "power3.out",
                });
                gsap.to(arrowRef.current, {
                    x: 10,
                    opacity: 1,
                    scale: 1,
                    duration: 0.3,
                    rotation: 10,
                    ease: "power3.out",
                });
            };

            const leaveAnim = () => {
                gsap.to(chars, {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power3.inOut",
                    stagger: 0.05,
                    rotation: 0,
                    onComplete: () => {
                        // Flèche animée après que tous les caractères sont apparus
                        gsap.to(arrowRef.current, {
                            x: 0,
                            opacity: 1,
                            duration: 0.3,
                            rotation: 0,
                            ease: "power3.out",
                        });
                    }
                });
            };

            if(!learnMore.current || !arrowRef.current) return;
            learnMore.current.addEventListener("mouseenter", enterAnim);
            learnMore.current.addEventListener("mouseleave", leaveAnim);



        }, sectionRef);


        // Nettoyage automatique à la destruction du composant
        return () => ctx.revert();
    }, []);


    return (
        <section ref={sectionRef} id="hero" className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-center items-center my-24 md:my-0">
            <div className="w-full max-w-[2600px] mx-auto flex flex-col justify-center items-center">
                <h1 className="titleSection uppercase mb-4 text-center text-2xl md:text-3xl text-ink">{t.nav.about}</h1>
                {/* Ligne 1 : "Hi there, I'm " | "Bonjour, je suis " */}
                {/* Ligne 2 : "Nolann LESCOP" avec la couleur accentuée */}
                <h1 className="titleH1 text-6xl md:text-9xl font-bold text-center mt-0">
                    {t.home.greeting.split("Nolann")[0]}<br/>
                    Nolann <span className="text-ink">LESCOP</span>
                </h1>
                <p className="textP my-6 text-lg md:text-2xl text-center max-w-3xl">
                    {t.home.bio}
                </p>
                <div className="flex flex-col justify-center items-center mt-14 md:w-[60%] w-[80%]">
                    <div data-loader="line"
                        className="w-full border-t-2 border-dashed border-ink">
                    </div>
                    <a href={`/${lang}/experiences`}
                       ref={learnMore}
                       className="flex flex-row items-center gap-2 uppercase text-ink py-2 font-bold text-2xl md:text-4xl">
                        {t.home.cta} <MoveRight ref={arrowRef}/>
                    </a>
                    <div data-loader="line" // data-loader pour cibler l'élément
                        className="w-full border-t-2 border-dashed border-ink flex flex-coljustify-center">
                    </div>
                </div>
            </div>
        </section>
        
    );
}

export default Hero;

