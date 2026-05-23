"use client";

import { forwardRef, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

type PageEndSectionProps = {
    title?: string;
    ctaLabel?: string;
    ctaHref?: string;
};

const PageEndSection = forwardRef<HTMLElement, PageEndSectionProps>(function PageEndSection(
    { title = "Let's work together !", ctaLabel = "CONTACT ME", ctaHref = "mailto:nolann.lescop@outlook.com" },
    ref
) {
    const titleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLHeadingElement>(null);
    const underlineRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.fromTo(titleRef.current, { y: 80, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1, ease: "power3.out",
                scrollTrigger: { trigger: titleRef.current, start: "top 85%", toggleActions: "play none none reverse" }
            });

            gsap.fromTo(ctaRef.current, { y: 80, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2,
                scrollTrigger: { trigger: ctaRef.current, start: "top 85%", toggleActions: "play none none reverse" }
            });

            // Animation underline mobile uniquement
            const isMobile = window.matchMedia("(max-width: 767px)").matches;
            if (isMobile && underlineRef.current) {
                gsap.fromTo(
                    underlineRef.current,
                    { scaleX: 0 },
                    {
                        scaleX: 1,
                        duration: 0.6,
                        ease: "power3.out",
                        delay: 0.5,
                        scrollTrigger: {
                            trigger: ctaRef.current,
                            start: "top 85%",
                            toggleActions: "play none none none", // reste souligné
                        },
                    }
                );
            }
        });
        return () => ctx.revert();
    }, []);

    return (
        <section className="flex flex-col items-center justify-center min-h-[55vh] w-full px-6 mb-20 md:mb-80">
            <div className="cta-reveal w-[98vw] max-w-[2200px] flex flex-col items-center text-center">
                <p ref={titleRef} className="font-script text-[clamp(2.6rem,9.5vw,8.5rem)] md:text-[clamp(3.7rem,10.5vw,10.5rem)] tracking-tight leading-none text-ink">
                    {title}
                </p>
                <h2 ref={ctaRef} className="font-sans text-[clamp(3.9rem,12.5vw,10.5rem)] md:text-[clamp(5.2rem,14.5vw,14.5rem)] uppercase font-black tracking-tight text-ink md:-mt-10">
                    <a href={ctaHref} className="relative inline-block group">
                        {ctaLabel}
                        <span
                            ref={underlineRef}
                            className="cta-underline absolute left-0 bottom-1 md:bottom-12 h-2 md:h-4 w-full origin-left scale-x-0 bg-ink transition-transform duration-300 ease-out md:group-hover:scale-x-100"
                        ></span>
                    </a>
                </h2>
            </div>
        </section>
    );
});

export default PageEndSection;