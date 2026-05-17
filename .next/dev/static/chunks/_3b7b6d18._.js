(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Intro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const BASE_PATH = "/my-portfolio-next.js";
/**
 * Intro - Ouverture visuelle de la page d'accueil
 * @description Anime une vidéo hero avec effet de zoom et disparition progressive du texte au scroll.
 * @component Client
 */ const Intro = ()=>{
    _s();
    // Refs pour les animations GSAP
    const imageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const descRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // useEffect: calcule les dimensions et lance les animations liées au scroll après montage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Intro.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            if (!imageRef.current || !textRef.current || !sectionRef.current || !lineRef.current) return;
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Intro.useEffect.ctx": ()=>{
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
                    const targetScale = window.innerWidth * 1.3 / initialWidth;
                    const scaleMax = Math.min(scaleX, scaleY, targetScale, 6.0);
                    const offsetY = minTop - rect.top;
                    const scrollLength = window.innerHeight;
                    // Texte: remonte et disparaît au scroll
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(textRef.current, {
                        opacity: 1,
                        y: 0
                    }, {
                        opacity: 0,
                        y: scrollLength * 0.55,
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top top",
                            end: `+=${scrollLength}`,
                            scrub: true
                        }
                    });
                    // Image: zoom pendant le scroll
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(imageRef.current, {
                        scale: scaleMax,
                        transformOrigin: "center top",
                        ease: "none",
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: "top top",
                            end: `+=${scrollLength - 10}`,
                            scrub: true,
                            pin: true,
                            pinSpacing: true
                        }
                    });
                    // Ligne: apparition progressive
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(lineRef.current, {
                        scaleX: 0,
                        transformOrigin: "center"
                    }, {
                        scaleX: 1,
                        ease: "power2.out",
                        duration: 1
                    });
                    // Description: apparition depuis la droite
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(descRef.current, {
                        opacity: 0,
                        x: 100
                    }, {
                        opacity: 1,
                        x: 0,
                        ease: "power2.out",
                        duration: 1,
                        delay: 0.3
                    });
                    // Titre: apparition depuis la gauche
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(titleRef.current, {
                        opacity: 0,
                        x: -100
                    }, {
                        opacity: 1,
                        x: 0,
                        ease: "power2.out",
                        duration: 1,
                        delay: 0.3
                    });
                    // Image: apparition en opacity
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(imageRef.current, {
                        y: window.innerWidth < 768 ? 0 : offsetY
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(imageRef.current, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        ease: "power2.out",
                        duration: 1,
                        delay: 0.3
                    });
                }
            }["Intro.useEffect.ctx"], sectionRef);
            return ({
                "Intro.useEffect": ()=>ctx.revert()
            })["Intro.useEffect"];
        }
    }["Intro.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "#",
        ref: sectionRef,
        className: "relative h-screen overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 flex flex-col justify-end items-center gap-10 mb-20 md:mb-0",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: imageRef,
                    className: "w-[63vw] md:w-[53vw] lg:w-[43vw] aspect-[16/9] overflow-hidden shadow-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        src: `${BASE_PATH}/velo/Intro.mp4`,
                        autoPlay: true,
                        loop: true,
                        muted: true,
                        playsInline: true,
                        className: "w-full h-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/components/Intro.tsx",
                        lineNumber: 86,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/Intro.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: textRef,
                    className: "flex flex-col justify-center items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: lineRef,
                            className: "w-full border-t-2 border-dashed border-[#1e1f1f] opacity-70 my-2 md:my-8 mx-0.5"
                        }, void 0, false, {
                            fileName: "[project]/components/Intro.tsx",
                            lineNumber: 89,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            ref: descRef,
                            className: "my-4 text-2xl md:text-6xl text-center md:text-left",
                            children: "Computer Science B.U.T. Student."
                        }, void 0, false, {
                            fileName: "[project]/components/Intro.tsx",
                            lineNumber: 90,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            ref: titleRef,
                            className: "text-5xl md:text-[12vw] font-bold text-center md:text-left -mt-2 md:mt-0",
                            children: [
                                "Nolann ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#1e1f1f]",
                                    children: "LESCOP"
                                }, void 0, false, {
                                    fileName: "[project]/components/Intro.tsx",
                                    lineNumber: 92,
                                    columnNumber: 32
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Intro.tsx",
                            lineNumber: 91,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Intro.tsx",
                    lineNumber: 88,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Intro.tsx",
            lineNumber: 84,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Intro.tsx",
        lineNumber: 83,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Intro, "uw13rZqgP4dRpej0yxSe1AhqCj0=");
_c = Intro;
const __TURBOPACK__default__export__ = Intro;
var _c;
__turbopack_context__.k.register(_c, "Intro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move-right.js [app-client] (ecmascript) <export default as MoveRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/**
 * Hero - Section d'introduction
 * @returns {JSX.Element} Composant Hero avec animations d'entrée et interactions sur le bouton "Learn More"
 * @description Affiche une introduction avec animations d'entrée pour le titre, le texte et le bouton "Learn More" qui réagit au survol.
 */ const Hero = ()=>{
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const learnMore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const arrowRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            // On enregistre ScrollTrigger
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "Hero.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".titleSection", {
                        x: 100,
                        opacity: 0
                    }, {
                        x: 0,
                        ease: "power4.out",
                        opacity: 1,
                        delay: 0.3,
                        duration: 1,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            toggleActions: "play none none reset"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".titleH1", {
                        x: -100,
                        opacity: 0
                    }, {
                        x: 0,
                        ease: "power4.out",
                        opacity: 1,
                        delay: 0.3,
                        duration: 1,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            toggleActions: "play none none reset"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".textP", {
                        x: 100,
                        opacity: 0
                    }, {
                        x: 0,
                        ease: "power4.out",
                        opacity: 1,
                        duration: 1,
                        delay: 0.3,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            toggleActions: "play none none reset"
                        }
                    });
                    const split = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](learnMore.current, {
                        type: "chars"
                    });
                    const chars = split.chars;
                    if (!chars) return;
                    const enterAnim = {
                        "Hero.useEffect.ctx.enterAnim": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(chars, {
                                x: 10,
                                opacity: 1,
                                scale: 1,
                                duration: 0.3,
                                rotation: 10,
                                ease: "power3.out"
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(arrowRef.current, {
                                x: 10,
                                opacity: 1,
                                scale: 1,
                                duration: 0.3,
                                rotation: 10,
                                ease: "power3.out"
                            });
                        }
                    }["Hero.useEffect.ctx.enterAnim"];
                    const leaveAnim = {
                        "Hero.useEffect.ctx.leaveAnim": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(chars, {
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                duration: 0.3,
                                ease: "power3.inOut",
                                stagger: 0.05,
                                rotation: 0,
                                onComplete: {
                                    "Hero.useEffect.ctx.leaveAnim": ()=>{
                                        // Flèche animée après que tous les caractères sont apparus
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(arrowRef.current, {
                                            x: 0,
                                            opacity: 1,
                                            duration: 0.3,
                                            rotation: 0,
                                            ease: "power3.out"
                                        });
                                    }
                                }["Hero.useEffect.ctx.leaveAnim"]
                            });
                        }
                    }["Hero.useEffect.ctx.leaveAnim"];
                    if (!learnMore.current || !arrowRef.current) return;
                    learnMore.current.addEventListener("mouseenter", enterAnim);
                    learnMore.current.addEventListener("mouseleave", leaveAnim);
                }
            }["Hero.useEffect.ctx"], sectionRef);
            // Nettoyage automatique à la destruction du composant
            return ({
                "Hero.useEffect": ()=>ctx.revert()
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        id: "hero",
        className: "relative min-h-[85vh] md:min-h-screen flex flex-col justify-center items-center my-24 md:my-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-[2600px] mx-auto flex flex-col justify-center items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "titleSection uppercase mb-4 text-center text-2xl md:text-3xl text-[#1f1d1f]",
                    children: "About Me"
                }, void 0, false, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 142,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "titleH1 text-6xl md:text-9xl font-bold text-center mt-0",
                    children: [
                        "Hi there, ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 144,
                            columnNumber: 31
                        }, ("TURBOPACK compile-time value", void 0)),
                        " I'm Nolann ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#1e1f1f]",
                            children: "LESCOP"
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 144,
                            columnNumber: 53
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 143,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "textP my-6 text-lg md:text-2xl text-center max-w-3xl",
                    children: "I'm a student at the IUT in Vannes in the second year of a computer science degree, and I'm looking for an internship to apply my knowledge and develop my skills in the IT field."
                }, void 0, false, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 146,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col justify-center items-center mt-14 md:w-[60%] w-[80%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-loader": "line",
                            className: "w-full border-t-2 border-dashed border-[#1e1f1f]"
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 152,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/about",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            ref: learnMore,
                            className: "flex flew-row items-center gap-2 uppercase text-[#1f1d1f] py-2 font-bold text-2xl md:text-4xl",
                            children: [
                                "LEARN MORE ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MoveRight$3e$__["MoveRight"], {
                                    ref: arrowRef
                                }, void 0, false, {
                                    fileName: "[project]/components/Hero.tsx",
                                    lineNumber: 160,
                                    columnNumber: 36
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 155,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-loader": "line",
                            className: "w-full border-t-2 border-dashed border-[#1e1f1f] flex flex-coljustify-center"
                        }, void 0, false, {
                            fileName: "[project]/components/Hero.tsx",
                            lineNumber: 162,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 151,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/Hero.tsx",
            lineNumber: 141,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 140,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Hero, "y4UDqNkdor/ZPUb03tYqK60yNCU=");
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/projects.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "featuredProjects",
    ()=>featuredProjects,
    "getNextProject",
    ()=>getNextProject,
    "getPreviousProject",
    ()=>getPreviousProject,
    "getProjectBySlug",
    ()=>getProjectBySlug,
    "projects",
    ()=>projects
]);
const projects = [
    {
        id: 1,
        slug: "skills-portfolio",
        title: "Skills Portfolio",
        shortDescription: "Portfolio de competences pour le BUT Informatique.",
        description: "Portfolio de competences pour le BUT Informatique a l'IUT de Vannes, avec des preuves de progression, SAEs et reflexions personnelles.",
        image: "/projects/portfolio_notion.jpg",
        tags: [
            "Notion",
            "Design"
        ],
        year: 2025,
        repoLink: "#",
        demoLink: "https://lescop-nolann.notion.site/Portfolio-de-comp-ences-BUT-informatique-IUT-de-Vannes-1bc65c526a3880dd8b51caef7c8637ae",
        hoverVideo: "/projects/previews/portfolio.mp4",
        featured: true,
        overview: "Ce portfolio a été créé pour répondre aux exigences du BUT Informatique à l'IUT de Vannes. Il met en valeur mes compétences techniques à travers des projets concrets, des preuves de progression et des réflexions personnelles sur mon parcours.",
        coreFeatures: "Portfolio Notion présentant comment j'ai justifié chaque compétence du BUT Informatique à travers les SAE (Situation d'Apprentissage et d'Évaluation) realisés en groupe pendant les 3 années du BUT. Chaque compétence est démontrée par des projets concrets avec preuves de progression, analyses réflexives et évaluations.",
        technologies: [
            {
                category: "Frontend",
                items: [
                    "Next.js 16",
                    "TypeScript",
                    "React",
                    "Tailwind CSS"
                ]
            },
            {
                category: "Animations",
                items: [
                    "GSAP",
                    "ScrollTrigger",
                    "SplitText"
                ]
            },
            {
                category: "Icons & Tools",
                items: [
                    "Lucide React",
                    "Google Fonts"
                ]
            },
            {
                category: "Deployment",
                items: [
                    "GitHub Pages",
                    "GitHub Actions"
                ]
            }
        ],
        screenshots: [
            "/projects/screenshots/portfolio_notion/notion_1.png",
            "/projects/screenshots/portfolio_notion/notion_2.png"
        ]
    },
    {
        id: 2,
        slug: "old-portfolio-website",
        title: "Old Portfolio Website",
        shortDescription: "Mon ancien portfolio personnel.",
        description: "Mon premier portfolio personnel pour presenter mes projets, mes competences et mon parcours en developpement front-end.",
        image: "/projects/old_website.jpg",
        tags: [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        year: 2024,
        repoLink: "https://github.com/nolann-alt/site-nolann-lescop",
        demoLink: "https://nolann-alt.github.io/site-nolann-lescop/",
        hoverVideo: "/projects/previews/old-portfolio.mp4",
        featured: true,
        overview: "Mon premier portfolio personnel créé lors de mes premiers mois en BUT Informatique. Ce projet m'a permis de mettre en pratique les bases du développement web (HTML, CSS, JavaScript) tout en créant une présence en ligne professionnelle. C'était l'occasion d'expérimenter avec les animations CSS et le design responsive.",
        coreFeatures: "Premier site web personnel présentant mes projets, compétences et parcours en développement front-end. Site statique avec animations CSS et design responsive.",
        technologies: [
            {
                category: "Frontend",
                items: [
                    "HTML5",
                    "CSS3",
                    "JavaScript"
                ]
            },
            {
                category: "Design",
                items: [
                    "CSS Grid",
                    "Flexbox",
                    "Media Queries"
                ]
            },
            {
                category: "Deployment",
                items: [
                    "GitHub Pages"
                ]
            }
        ],
        screenshots: [
            "/projects/screenshots/old-portfolio-1.jpg",
            "/projects/screenshots/old-portfolio-2.jpg"
        ]
    },
    {
        id: 3,
        slug: "grundy-game",
        title: "Grundy Game",
        shortDescription: "Comparaison d'algorithmes sur le Grundy Game.",
        description: "Projet universitaire de comparaison et optimisation d'algorithmes en Java avec analyse de performance et approche mathematique.",
        image: "/projects/Grundy.jpg",
        tags: [
            "Java",
            "Algorithmie"
        ],
        year: 2025,
        repoLink: "https://github.com/nolann-alt/SAE_S1.02",
        demoLink: "https://www.youtube.com/watch?v=hvCCPTWwUAY",
        hoverVideo: "/projects/previews/grundy.mp4",
        featured: true,
        overview: "Projet universitaire de la SAE S1.02 visant à comparer différents algorithmes de résolution du Grundy Game (jeu de Nim multidimensionnel). Ce projet m'a permis d'approfondir mes connaissances en algorithmie, en analyse de complexité et en optimisation. Nous avons implémenté plusieurs stratégies et les avons comparées selon leur efficacité.",
        coreFeatures: "Projet universitaire de comparaison et optimisation d'algorithmes en Java. Implémentation de plusieurs stratégies de résolution du Grundy Game avec analyse de performance et complexité.",
        technologies: [
            {
                category: "Langage",
                items: [
                    "Java"
                ]
            },
            {
                category: "Concepts",
                items: [
                    "Algorithmie",
                    "Théorie des jeux",
                    "Analyse complexité"
                ]
            },
            {
                category: "Outils",
                items: [
                    "Eclipse",
                    "JUnit (tests)"
                ]
            }
        ],
        screenshots: [
            "/projects/screenshots/grundy-game-1.jpg",
            "/projects/screenshots/grundy-game-2.jpg"
        ]
    },
    {
        id: 4,
        slug: "step-by-step",
        title: "Step-by-Step",
        shortDescription: "Repertoire d'exercices et mini-projets.",
        description: "Collection d'exercices et mini-projets pour renforcer mes bases en JavaScript, Java, HTML, CSS et Python.",
        image: "/projects/step-by-step.jpg",
        tags: [
            "JavaScript",
            "Java",
            "Python"
        ],
        year: 2025,
        repoLink: "https://github.com/nolann-alt/step-by-step",
        demoLink: "#",
        hoverVideo: "/projects/previews/step-by-step.mp4",
        featured: true,
        overview: "Repository personnel contenant tous les exercices et mini-projets que j'ai réalisés pour consolider mes bases en programmation. Ce répertoire sert de portfolio d'apprentissage et témoignent de ma progression dans différents langages et technologies. Chaque dossier contient des exercices guidés et des défis personnels.",
        coreFeatures: "Repository d'exercices et mini-projets en plusieurs langages (JavaScript, Java, Python, HTML, CSS) pour renforcer mes bases en programmation. Chaque dossier contient des exercices guidés et des défis personnels.",
        technologies: [
            {
                category: "Langages",
                items: [
                    "JavaScript",
                    "Java",
                    "Python",
                    "HTML",
                    "CSS"
                ]
            },
            {
                category: "Concepts",
                items: [
                    "POO",
                    "Algorithmie",
                    "SQL",
                    "DOM"
                ]
            },
            {
                category: "Outils",
                items: [
                    "VS Code",
                    "Git",
                    "Node.js"
                ]
            }
        ],
        screenshots: [
            "/projects/screenshots/step-by-step-1.jpg",
            "/projects/screenshots/step-by-step-2.jpg"
        ]
    },
    {
        id: 5,
        slug: "project-five",
        title: "Project Five",
        shortDescription: "Projet supplementaire a completer.",
        description: "Projet supplementaire a completer.",
        image: "/projects/portfolio_notion.jpg",
        tags: [
            "Next.js",
            "UI"
        ],
        year: 2025
    },
    {
        id: 6,
        slug: "project-six",
        title: "Project Six",
        shortDescription: "Projet supplementaire a completer.",
        description: "Projet supplementaire a completer.",
        image: "/projects/old_website.jpg",
        tags: [
            "TypeScript",
            "Frontend"
        ],
        year: 2025
    }
];
const featuredProjects = projects.filter((project)=>project.featured);
function getProjectBySlug(slug) {
    return projects.find((project)=>project.slug === slug);
}
function getNextProject(slug) {
    const index = projects.findIndex((project)=>project.slug === slug);
    if (index === -1 || index === projects.length - 1) {
        return null;
    }
    return projects[index + 1];
}
function getPreviousProject(slug) {
    const index = projects.findIndex((project)=>project.slug === slug);
    if (index <= 0) {
        return null;
    }
    return projects[index - 1];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FeaturedProjects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FeaturedProjects
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$asterisk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Asterisk$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/asterisk.js [app-client] (ecmascript) <export default as Asterisk>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/SplitText.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/projects.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
const BASE_PATH = "/my-portfolio-next.js";
function FeaturedProjects() {
    _s();
    // useRef: pointe le lien "More projects" pour appliquer une animation SplitText au hover
    const learnMore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // useEffect: configure les animations GSAP au montage et restaure l'état initial au démontage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FeaturedProjects.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "FeaturedProjects.useEffect.ctx": ()=>{
                    // Animation au hover sur "More projects"
                    const split = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$SplitText$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](learnMore.current, {
                        type: "chars"
                    });
                    const chars = split.chars;
                    if (!chars) return;
                    const enterAnim = {
                        "FeaturedProjects.useEffect.ctx.enterAnim": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(chars, {
                                x: 10,
                                opacity: 1,
                                scale: 1,
                                duration: 0.3,
                                rotation: 10,
                                ease: "power3.out"
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".fp-arrow", {
                                x: 10,
                                opacity: 1,
                                scale: 1,
                                duration: 0.3,
                                rotation: 10,
                                ease: "power3.out"
                            });
                        }
                    }["FeaturedProjects.useEffect.ctx.enterAnim"];
                    const leaveAnim = {
                        "FeaturedProjects.useEffect.ctx.leaveAnim": ()=>{
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(chars, {
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                duration: 0.3,
                                ease: "power3.inOut",
                                stagger: 0.05,
                                rotation: 0
                            });
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].to(".fp-arrow", {
                                x: 0,
                                opacity: 1,
                                duration: 0.3,
                                rotation: 0,
                                ease: "power3.out"
                            });
                        }
                    }["FeaturedProjects.useEffect.ctx.leaveAnim"];
                    if (!learnMore.current) return;
                    learnMore.current.addEventListener("mouseenter", enterAnim);
                    learnMore.current.addEventListener("mouseleave", leaveAnim);
                    // Titres: apparition depuis le bas
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".fp-featured-title", {
                        y: 40,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: ".fp-featured-title",
                            start: "top 80%",
                            toggleActions: "restart reverse restart reverse"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".fp-subtitle", {
                        y: 20,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        delay: 0.1,
                        scrollTrigger: {
                            trigger: ".fp-subtitle",
                            start: "top 85%",
                            toggleActions: "restart reverse restart reverse"
                        }
                    });
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].from(".fp-projects-title", {
                        y: 40,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power3.out",
                        delay: 0.15,
                        scrollTrigger: {
                            trigger: ".fp-projects-title",
                            start: "top 80%",
                            toggleActions: "restart reverse restart reverse"
                        }
                    });
                    // Cartes: reveal de haut en bas
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(".fp-card", {
                        clipPath: "inset(0 0 100% 0)",
                        y: -20,
                        opacity: 0
                    }, {
                        clipPath: "inset(0 0 0% 0)",
                        y: 0,
                        opacity: 1,
                        duration: 1.1,
                        ease: "power3.out",
                        delay: 0.2,
                        stagger: {
                            each: 0.16
                        },
                        scrollTrigger: {
                            trigger: ".fp-card",
                            start: "top 85%",
                            once: true
                        }
                    });
                }
            }["FeaturedProjects.useEffect.ctx"]);
            return ({
                "FeaturedProjects.useEffect": ()=>ctx.revert()
            })["FeaturedProjects.useEffect"];
        }
    }["FeaturedProjects.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-[98vw] mx-auto px-0 py-12 md:py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row md:items-center md:justify-between w-full z-10 px-4 md:pl-12 md:pr-0.5 -mb-2 md:-mb-6 lg:-mb-10 text-center md:text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center md:items-center md:mr-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 md:gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$asterisk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Asterisk$3e$__["Asterisk"], {
                                        strokeWidth: 1,
                                        className: "h-5 w-5 md:h-20 md:w-20 text-[#1e1f1f] mr-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FeaturedProjects.tsx",
                                        lineNumber: 78,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "fp-featured-title font-script text-5xl md:text-[7rem] lg:text-[10rem] tracking-tight leading-none font-light",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[#1e1f1f]",
                                            children: "Featured"
                                        }, void 0, false, {
                                            fileName: "[project]/components/FeaturedProjects.tsx",
                                            lineNumber: 80,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/FeaturedProjects.tsx",
                                        lineNumber: 79,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$asterisk$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Asterisk$3e$__["Asterisk"], {
                                        strokeWidth: 1,
                                        className: "h-5 w-5 md:h-20 md:w-20 text-[#1e1f1f] ml-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FeaturedProjects.tsx",
                                        lineNumber: 82,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FeaturedProjects.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "fp-subtitle md:-mt-4 max-w-[16rem] px-3 text-xs md:text-lg font-bold text-[#1f1d1f] md:max-w-[28rem] text-center",
                                children: "A selection of recent projects illustrating my career in the field of computer science"
                            }, void 0, false, {
                                fileName: "[project]/components/FeaturedProjects.tsx",
                                lineNumber: 84,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FeaturedProjects.tsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "fp-projects-title font-sans text-7xl md:text-[13rem] lg:text-[22rem] leading-none uppercase font-black tracking-wide md:ml-auto",
                        children: "Projects"
                    }, void 0, false, {
                        fileName: "[project]/components/FeaturedProjects.tsx",
                        lineNumber: 88,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FeaturedProjects.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-2 md:gap-6 sm:grid-cols-2",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$projects$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featuredProjects"].map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/projects/${project.slug}`,
                        className: "block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "group relative overflow-hidden border border-[#1f1d1f]/15 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "fp-card relative aspect-[4/3] overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: `${BASE_PATH}${project.image}`,
                                        alt: project.title,
                                        className: "h-full w-full object-contain bg-[#0f0f10] transition-transform duration-700 group-hover:scale-105"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FeaturedProjects.tsx",
                                        lineNumber: 96,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-[#0f0f10]/80 via-[#0f0f10]/10 to-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/FeaturedProjects.tsx",
                                        lineNumber: 97,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-x-0 bottom-0 flex flex-col items-center p-5 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold leading-tight",
                                                children: project.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/FeaturedProjects.tsx",
                                                lineNumber: 99,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 max-w-base text-base text-white/80",
                                                children: project.shortDescription
                                            }, void 0, false, {
                                                fileName: "[project]/components/FeaturedProjects.tsx",
                                                lineNumber: 100,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FeaturedProjects.tsx",
                                        lineNumber: 98,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FeaturedProjects.tsx",
                                lineNumber: 95,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/FeaturedProjects.tsx",
                            lineNumber: 94,
                            columnNumber: 25
                        }, this)
                    }, project.id, false, {
                        fileName: "[project]/components/FeaturedProjects.tsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/FeaturedProjects.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center mt-16 md:mt-32",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[60%] border-t-2 border-dashed border-[#1e1f1f]"
                    }, void 0, false, {
                        fileName: "[project]/components/FeaturedProjects.tsx",
                        lineNumber: 109,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/projects",
                        ref: learnMore,
                        className: "flex flex-row items-center gap-3 uppercase text-[#1f1d1f] py-2 font-bold text-2xl md:text-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "More"
                            }, void 0, false, {
                                fileName: "[project]/components/FeaturedProjects.tsx",
                                lineNumber: 111,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1",
                                children: "projects"
                            }, void 0, false, {
                                fileName: "[project]/components/FeaturedProjects.tsx",
                                lineNumber: 112,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1 fp-arrow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M5 12h14"
                                        }, void 0, false, {
                                            fileName: "[project]/components/FeaturedProjects.tsx",
                                            lineNumber: 113,
                                            columnNumber: 231
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "m12 5 7 7-7 7"
                                        }, void 0, false, {
                                            fileName: "[project]/components/FeaturedProjects.tsx",
                                            lineNumber: 113,
                                            columnNumber: 251
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/FeaturedProjects.tsx",
                                    lineNumber: 113,
                                    columnNumber: 53
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/FeaturedProjects.tsx",
                                lineNumber: 113,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FeaturedProjects.tsx",
                        lineNumber: 110,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[60%] border-t-2 border-dashed border-[#1e1f1f] flex flex-col justify-center"
                    }, void 0, false, {
                        fileName: "[project]/components/FeaturedProjects.tsx",
                        lineNumber: 115,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FeaturedProjects.tsx",
                lineNumber: 108,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FeaturedProjects.tsx",
        lineNumber: 74,
        columnNumber: 9
    }, this);
}
_s(FeaturedProjects, "GOLQi35RDH1cz0koTRAUaJBuTnk=");
_c = FeaturedProjects;
var _c;
__turbopack_context__.k.register(_c, "FeaturedProjects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TextParagraph.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TextParagraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TextParagraph({ subtitle = "Thank you for your visit", paragraphs = [
    [
        "Your time means a lot,",
        "and I hope you enjoyed",
        "discovering this portfolio."
    ]
] }) {
    _s();
    // useRef: référence racine utilisée comme scope des animations GSAP
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Animation alternée des lignes (gauche/droite)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextParagraph.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "TextParagraph.useEffect.ctx": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].utils.toArray(".text-paragraph-line").forEach({
                        "TextParagraph.useEffect.ctx": (el, index)=>{
                            const dir = index % 2 === 0 ? -150 : 150;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(el, {
                                x: dir,
                                opacity: 0
                            }, {
                                x: 0,
                                opacity: 1,
                                duration: 1.8,
                                ease: "power3.out",
                                scrollTrigger: {
                                    trigger: el,
                                    start: "top 90%",
                                    toggleActions: "play none none reverse"
                                }
                            });
                        }
                    }["TextParagraph.useEffect.ctx"]);
                }
            }["TextParagraph.useEffect.ctx"], sectionRef);
            return ({
                "TextParagraph.useEffect": ()=>ctx.revert()
            })["TextParagraph.useEffect"];
        }
    }["TextParagraph.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "flex flex-col items-center justify-center h-[90vh] md:min-h-[100vh] w-full px-5 relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full w-[98vw] max-w-[2600px] grid grid-rows-[auto_1fr_auto] items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex justify-between mb-20 md:mb-56 mt-4 md:mt-8 px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2 md:w-4 h-2 md:h-4 bg-[#1f1d1f] rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/components/TextParagraph.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2 md:w-4 h-2 md:h-4 bg-[#1f1d1f] rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/components/TextParagraph.tsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TextParagraph.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-[2200px] flex flex-col items-center text-center self-center mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[9px] md:text-2xl uppercase mb-5 md:mb-16 text-[#1f1d1f]",
                            children: subtitle
                        }, void 0, false, {
                            fileName: "[project]/components/TextParagraph.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this),
                        paragraphs.map((lines, paragraphIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `font-bodoni text-3xl md:text-4xl lg:text-[4.5rem] xl:text-[6rem] leading-[1.3] tracking-tighter text-[#1f1d1f] flex flex-col items-center text-center md:gap-y-12 lg:gap-y-20 ${paragraphIndex > 0 ? "mt-0 md:mt-16" : ""}`,
                                children: lines.map((line, lineIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-paragraph-line block",
                                        children: line
                                    }, `${line}-${lineIndex}`, false, {
                                        fileName: "[project]/components/TextParagraph.tsx",
                                        lineNumber: 48,
                                        columnNumber: 33
                                    }, this))
                            }, `paragraph-${paragraphIndex}`, false, {
                                fileName: "[project]/components/TextParagraph.tsx",
                                lineNumber: 46,
                                columnNumber: 25
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TextParagraph.tsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex justify-between mt-20 md:mt-56 mb-4 md:mb-8 px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2 md:w-4 h-2 md:h-4 bg-[#1f1d1f] rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/components/TextParagraph.tsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2 md:w-4 h-2 md:h-4 bg-[#1f1d1f] rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/components/TextParagraph.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TextParagraph.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/TextParagraph.tsx",
            lineNumber: 38,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/TextParagraph.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_s(TextParagraph, "O9MYfDkQexHh+zrn37J6HLSAdf8=");
_c = TextParagraph;
var _c;
__turbopack_context__.k.register(_c, "TextParagraph");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/PageEndSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/**
 * PageEndSection - Section finale avec appel à l'action
 * @description Affiche un message de fin de page et un lien de contact animé au scroll.
 * @component Client
 */ const PageEndSection = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function PageEndSection({ title = "Let's work together !", ctaLabel = "CONTACT ME", ctaHref = "mailto:nolann.lescop@outlook.com" }, ref) {
    _s();
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Animations au scroll
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageEndSection.PageEndSection.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context({
                "PageEndSection.PageEndSection.useEffect.ctx": ()=>{
                    // Titre: apparition depuis le bas
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(titleRef.current, {
                        y: 80,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: titleRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    });
                    // CTA: apparition depuis le bas avec délai
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(ctaRef.current, {
                        y: 80,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "power3.out",
                        delay: 0.2,
                        scrollTrigger: {
                            trigger: ctaRef.current,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    });
                }
            }["PageEndSection.PageEndSection.useEffect.ctx"]);
            return ({
                "PageEndSection.PageEndSection.useEffect": ()=>ctx.revert()
            })["PageEndSection.PageEndSection.useEffect"];
        }
    }["PageEndSection.PageEndSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col items-center justify-center min-h-[55vh] w-full px-6 mb-20 md:mb-80",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "cta-reveal w-[98vw] max-w-[2200px] flex flex-col items-center text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    ref: titleRef,
                    className: "font-script text-[clamp(2.6rem,9.5vw,8.5rem)] md:text-[clamp(3.7rem,10.5vw,10.5rem)] tracking-tight leading-none text-[#1f1d1f]",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/components/PageEndSection.tsx",
                    lineNumber: 47,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    ref: ctaRef,
                    className: "font-sans text-[clamp(3.9rem,12.5vw,10.5rem)] md:text-[clamp(5.2rem,14.5vw,14.5rem)] uppercase font-black tracking-tight text-[#1f1d1f] md:-mt-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: ctaHref,
                        className: "relative inline-block group",
                        children: [
                            ctaLabel,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "cta-underline absolute left-0 bottom-1 md:bottom-12 h-3 md:h-4 w-full origin-left scale-x-0 bg-[#1f1d1f] transition-transform duration-300 ease-out md:group-hover:scale-x-100"
                            }, void 0, false, {
                                fileName: "[project]/components/PageEndSection.tsx",
                                lineNumber: 53,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/PageEndSection.tsx",
                        lineNumber: 51,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/PageEndSection.tsx",
                    lineNumber: 50,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/PageEndSection.tsx",
            lineNumber: 46,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/PageEndSection.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}, "ORVHDfz8whlKfmNIoYnI8nvm1uU=")), "ORVHDfz8whlKfmNIoYnI8nvm1uU=");
_c1 = PageEndSection;
const __TURBOPACK__default__export__ = PageEndSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "PageEndSection$forwardRef");
__turbopack_context__.k.register(_c1, "PageEndSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/move-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>MoveRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M18 8L22 12L18 16",
            key: "1r0oui"
        }
    ],
    [
        "path",
        {
            d: "M2 12H22",
            key: "1m8cig"
        }
    ]
];
const MoveRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("move-right", __iconNode);
;
 //# sourceMappingURL=move-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/move-right.js [app-client] (ecmascript) <export default as MoveRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MoveRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move-right.js [app-client] (ecmascript)");
}),
"[project]/node_modules/gsap/SplitText.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */ __turbopack_context__.s([
    "SplitText",
    ()=>SplitText,
    "default",
    ()=>SplitText
]);
let gsap, _fonts, _coreInitted, _initIfNecessary = ()=>_coreInitted || SplitText.register(window.gsap), _charSegmenter = typeof Intl !== "undefined" ? new Intl.Segmenter() : 0, _toArray = (r)=>typeof r === "string" ? _toArray(document.querySelectorAll(r)) : "length" in r ? Array.from(r) : [
        r
    ], _elements = (targets)=>_toArray(targets).filter((e)=>e instanceof HTMLElement), _emptyArray = [], _context = function() {}, _spacesRegEx = /\s+/g, _emojiSafeRegEx = new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"), _emptyBounds = {
    left: 0,
    top: 0,
    width: 0,
    height: 0
}, _stretchToFitSpecialChars = (collection, specialCharsRegEx)=>{
    if (specialCharsRegEx) {
        let charsFound = new Set(collection.join("").match(specialCharsRegEx) || _emptyArray), i = collection.length, slots, word, char, combined;
        if (charsFound.size) {
            while(--i > -1){
                word = collection[i];
                for (char of charsFound){
                    if (char.startsWith(word) && char.length > word.length) {
                        slots = 0;
                        combined = word;
                        while(char.startsWith(combined += collection[i + ++slots]) && combined.length < char.length){}
                        if (slots && combined.length === char.length) {
                            collection[i] = char;
                            collection.splice(i + 1, slots);
                            break;
                        }
                    }
                }
            }
        }
    }
    return collection;
}, _disallowInline = (element)=>window.getComputedStyle(element).display === "inline" && (element.style.display = "inline-block"), _insertNodeBefore = (newChild, parent, existingChild)=>parent.insertBefore(typeof newChild === "string" ? document.createTextNode(newChild) : newChild, existingChild), _getWrapper = (type, config, collection)=>{
    let className = config[type + "sClass"] || "", { tag = "div", aria = "auto", propIndex = false } = config, display = type === "line" ? "block" : "inline-block", incrementClass = className.indexOf("++") > -1, wrapper = (text)=>{
        let el = document.createElement(tag), i = collection.length + 1;
        className && (el.className = className + (incrementClass ? " " + className + i : ""));
        propIndex && el.style.setProperty("--" + type, i + "");
        aria !== "none" && el.setAttribute("aria-hidden", "true");
        if (tag !== "span") {
            el.style.position = "relative";
            el.style.display = display;
        }
        el.textContent = text;
        collection.push(el);
        return el;
    };
    incrementClass && (className = className.replace("++", ""));
    wrapper.collection = collection;
    return wrapper;
}, _getLineWrapper = (element, nodes, config, collection)=>{
    let lineWrapper = _getWrapper("line", config, collection), textAlign = window.getComputedStyle(element).textAlign || "left";
    return (startIndex, endIndex)=>{
        let newLine = lineWrapper("");
        newLine.style.textAlign = textAlign;
        element.insertBefore(newLine, nodes[startIndex]);
        for(; startIndex < endIndex; startIndex++){
            newLine.appendChild(nodes[startIndex]);
        }
        newLine.normalize();
    };
}, _splitWordsAndCharsRecursively = (element, config, wordWrapper, charWrapper, prepForCharsOnly, deepSlice, ignore, charSplitRegEx, specialCharsRegEx, isNested)=>{
    var _a;
    let nodes = Array.from(element.childNodes), i = 0, { wordDelimiter, reduceWhiteSpace = true, prepareText } = config, elementBounds = element.getBoundingClientRect(), lastBounds = elementBounds, isPreformatted = !reduceWhiteSpace && window.getComputedStyle(element).whiteSpace.substring(0, 3) === "pre", ignoredPreviousSibling = 0, wordsCollection = wordWrapper.collection, wordDelimIsNotSpace, wordDelimString, wordDelimSplitter, curNode, words, curWordEl, startsWithSpace, endsWithSpace, j, bounds, curWordChars, clonedNode, curSubNode, tempSubNode, curTextContent, wordText, lastWordText, k;
    if (typeof wordDelimiter === "object") {
        wordDelimSplitter = wordDelimiter.delimiter || wordDelimiter;
        wordDelimString = wordDelimiter.replaceWith || "";
    } else {
        wordDelimString = wordDelimiter === "" ? "" : wordDelimiter || " ";
    }
    wordDelimIsNotSpace = wordDelimString !== " ";
    for(; i < nodes.length; i++){
        curNode = nodes[i];
        if (curNode.nodeType === 3) {
            curTextContent = curNode.textContent || "";
            if (reduceWhiteSpace) {
                curTextContent = curTextContent.replace(_spacesRegEx, " ");
            } else if (isPreformatted) {
                curTextContent = curTextContent.replace(/\n/g, wordDelimString + "\n");
            }
            prepareText && (curTextContent = prepareText(curTextContent, element));
            curNode.textContent = curTextContent;
            words = wordDelimString || wordDelimSplitter ? curTextContent.split(wordDelimSplitter || wordDelimString) : curTextContent.match(charSplitRegEx) || _emptyArray;
            lastWordText = words[words.length - 1];
            endsWithSpace = wordDelimIsNotSpace ? lastWordText.slice(-1) === " " : !lastWordText;
            lastWordText || words.pop();
            lastBounds = elementBounds;
            startsWithSpace = wordDelimIsNotSpace ? words[0].charAt(0) === " " : !words[0];
            startsWithSpace && _insertNodeBefore(" ", element, curNode);
            words[0] || words.shift();
            _stretchToFitSpecialChars(words, specialCharsRegEx);
            deepSlice && isNested || (curNode.textContent = "");
            for(j = 1; j <= words.length; j++){
                wordText = words[j - 1];
                if (!reduceWhiteSpace && isPreformatted && wordText.charAt(0) === "\n") {
                    (_a = curNode.previousSibling) == null ? void 0 : _a.remove();
                    _insertNodeBefore(document.createElement("br"), element, curNode);
                    wordText = wordText.slice(1);
                }
                if (!reduceWhiteSpace && wordText === "") {
                    _insertNodeBefore(wordDelimString, element, curNode);
                } else if (wordText === " ") {
                    element.insertBefore(document.createTextNode(" "), curNode);
                } else {
                    wordDelimIsNotSpace && wordText.charAt(0) === " " && _insertNodeBefore(" ", element, curNode);
                    if (ignoredPreviousSibling && j === 1 && !startsWithSpace && wordsCollection.indexOf(ignoredPreviousSibling.parentNode) > -1) {
                        curWordEl = wordsCollection[wordsCollection.length - 1];
                        curWordEl.appendChild(document.createTextNode(charWrapper ? "" : wordText));
                    } else {
                        curWordEl = wordWrapper(charWrapper ? "" : wordText);
                        _insertNodeBefore(curWordEl, element, curNode);
                        ignoredPreviousSibling && j === 1 && !startsWithSpace && curWordEl.insertBefore(ignoredPreviousSibling, curWordEl.firstChild);
                    }
                    if (charWrapper) {
                        curWordChars = _charSegmenter ? _stretchToFitSpecialChars([
                            ..._charSegmenter.segment(wordText)
                        ].map((s)=>s.segment), specialCharsRegEx) : wordText.match(charSplitRegEx) || _emptyArray;
                        for(k = 0; k < curWordChars.length; k++){
                            curWordEl.appendChild(curWordChars[k] === " " ? document.createTextNode(" ") : charWrapper(curWordChars[k]));
                        }
                    }
                    if (deepSlice && isNested) {
                        curTextContent = curNode.textContent = curTextContent.substring(wordText.length + 1, curTextContent.length);
                        bounds = curWordEl.getBoundingClientRect();
                        if (bounds.top > lastBounds.top && bounds.left <= lastBounds.left) {
                            clonedNode = element.cloneNode();
                            curSubNode = element.childNodes[0];
                            while(curSubNode && curSubNode !== curWordEl){
                                tempSubNode = curSubNode;
                                curSubNode = curSubNode.nextSibling;
                                clonedNode.appendChild(tempSubNode);
                            }
                            element.parentNode.insertBefore(clonedNode, element);
                            prepForCharsOnly && _disallowInline(clonedNode);
                        }
                        lastBounds = bounds;
                    }
                    if (j < words.length || endsWithSpace) {
                        _insertNodeBefore(j >= words.length ? " " : wordDelimIsNotSpace && wordText.slice(-1) === " " ? " " + wordDelimString : wordDelimString, element, curNode);
                    }
                }
            }
            element.removeChild(curNode);
            ignoredPreviousSibling = 0;
        } else if (curNode.nodeType === 1) {
            if (ignore && ignore.indexOf(curNode) > -1) {
                wordsCollection.indexOf(curNode.previousSibling) > -1 && wordsCollection[wordsCollection.length - 1].appendChild(curNode);
                ignoredPreviousSibling = curNode;
            } else {
                _splitWordsAndCharsRecursively(curNode, config, wordWrapper, charWrapper, prepForCharsOnly, deepSlice, ignore, charSplitRegEx, specialCharsRegEx, true);
                ignoredPreviousSibling = 0;
            }
            prepForCharsOnly && _disallowInline(curNode);
        }
    }
};
const _SplitText = class _SplitText {
    constructor(elements, config){
        this.isSplit = false;
        _initIfNecessary();
        this.elements = _elements(elements);
        this.chars = [];
        this.words = [];
        this.lines = [];
        this.masks = [];
        this.vars = config;
        this._split = ()=>this.isSplit && this.split(this.vars);
        let orig = [], timerId, checkWidths = ()=>{
            let i = orig.length, o;
            while(i--){
                o = orig[i];
                let w = o.element.offsetWidth;
                if (w !== o.width) {
                    o.width = w;
                    this._split();
                    return;
                }
            }
        };
        this._data = {
            orig,
            obs: typeof ResizeObserver !== "undefined" && new ResizeObserver(()=>{
                clearTimeout(timerId);
                timerId = setTimeout(checkWidths, 200);
            })
        };
        _context(this);
        this.split(config);
    }
    split(config) {
        this.isSplit && this.revert();
        this.vars = config = config || this.vars || {};
        let { type = "chars,words,lines", aria = "auto", deepSlice = true, smartWrap, onSplit, autoSplit = false, specialChars, mask } = this.vars, splitLines = type.indexOf("lines") > -1, splitCharacters = type.indexOf("chars") > -1, splitWords = type.indexOf("words") > -1, onlySplitCharacters = splitCharacters && !splitWords && !splitLines, specialCharsRegEx = specialChars && ("push" in specialChars ? new RegExp("(?:" + specialChars.join("|") + ")", "gu") : specialChars), finalCharSplitRegEx = specialCharsRegEx ? new RegExp(specialCharsRegEx.source + "|" + _emojiSafeRegEx.source, "gu") : _emojiSafeRegEx, ignore = !!config.ignore && _elements(config.ignore), { orig, animTime, obs } = this._data, onSplitResult;
        if (splitCharacters || splitWords || splitLines) {
            this.elements.forEach((element, index)=>{
                orig[index] = {
                    element,
                    html: element.innerHTML,
                    ariaL: element.getAttribute("aria-label"),
                    ariaH: element.getAttribute("aria-hidden")
                };
                aria === "auto" ? element.setAttribute("aria-label", (element.textContent || "").trim()) : aria === "hidden" && element.setAttribute("aria-hidden", "true");
                let chars = [], words = [], lines = [], charWrapper = splitCharacters ? _getWrapper("char", config, chars) : null, wordWrapper = _getWrapper("word", config, words), i, curWord, smartWrapSpan, nextSibling;
                _splitWordsAndCharsRecursively(element, config, wordWrapper, charWrapper, onlySplitCharacters, deepSlice && (splitLines || onlySplitCharacters), ignore, finalCharSplitRegEx, specialCharsRegEx, false);
                if (splitLines) {
                    let nodes = _toArray(element.childNodes), wrapLine = _getLineWrapper(element, nodes, config, lines), curNode, toRemove = [], lineStartIndex = 0, allBounds = nodes.map((n)=>n.nodeType === 1 ? n.getBoundingClientRect() : _emptyBounds), lastBounds = _emptyBounds;
                    for(i = 0; i < nodes.length; i++){
                        curNode = nodes[i];
                        if (curNode.nodeType === 1) {
                            if (curNode.nodeName === "BR") {
                                toRemove.push(curNode);
                                wrapLine(lineStartIndex, i + 1);
                                lineStartIndex = i + 1;
                                lastBounds = allBounds[lineStartIndex];
                            } else {
                                if (i && allBounds[i].top > lastBounds.top && allBounds[i].left <= lastBounds.left) {
                                    wrapLine(lineStartIndex, i);
                                    lineStartIndex = i;
                                }
                                lastBounds = allBounds[i];
                            }
                        }
                    }
                    lineStartIndex < i && wrapLine(lineStartIndex, i);
                    toRemove.forEach((el)=>{
                        var _a;
                        return (_a = el.parentNode) == null ? void 0 : _a.removeChild(el);
                    });
                }
                if (!splitWords) {
                    for(i = 0; i < words.length; i++){
                        curWord = words[i];
                        if (splitCharacters || !curWord.nextSibling || curWord.nextSibling.nodeType !== 3) {
                            if (smartWrap && !splitLines) {
                                smartWrapSpan = document.createElement("span");
                                smartWrapSpan.style.whiteSpace = "nowrap";
                                while(curWord.firstChild){
                                    smartWrapSpan.appendChild(curWord.firstChild);
                                }
                                curWord.replaceWith(smartWrapSpan);
                            } else {
                                curWord.replaceWith(...curWord.childNodes);
                            }
                        } else {
                            nextSibling = curWord.nextSibling;
                            if (nextSibling && nextSibling.nodeType === 3) {
                                nextSibling.textContent = (curWord.textContent || "") + (nextSibling.textContent || "");
                                curWord.remove();
                            }
                        }
                    }
                    words.length = 0;
                    element.normalize();
                }
                this.lines.push(...lines);
                this.words.push(...words);
                this.chars.push(...chars);
            });
            mask && this[mask] && this.masks.push(...this[mask].map((el)=>{
                let maskEl = el.cloneNode();
                el.replaceWith(maskEl);
                maskEl.appendChild(el);
                el.className && (maskEl.className = el.className.replace(/(\b\w+\b)/g, "$1-mask"));
                maskEl.style.overflow = "clip";
                return maskEl;
            }));
        }
        this.isSplit = true;
        _fonts && (autoSplit ? _fonts.addEventListener("loadingdone", this._split) : _fonts.status === "loading" && console.warn("SplitText called before fonts loaded"));
        if ((onSplitResult = onSplit && onSplit(this)) && onSplitResult.totalTime) {
            this._data.anim = animTime ? onSplitResult.totalTime(animTime) : onSplitResult;
        }
        splitLines && autoSplit && this.elements.forEach((element, index)=>{
            orig[index].width = element.offsetWidth;
            obs && obs.observe(element);
        });
        return this;
    }
    revert() {
        var _a, _b;
        let { orig, anim, obs } = this._data;
        obs && obs.disconnect();
        orig.forEach(({ element, html, ariaL, ariaH })=>{
            element.innerHTML = html;
            ariaL ? element.setAttribute("aria-label", ariaL) : element.removeAttribute("aria-label");
            ariaH ? element.setAttribute("aria-hidden", ariaH) : element.removeAttribute("aria-hidden");
        });
        this.chars.length = this.words.length = this.lines.length = orig.length = this.masks.length = 0;
        this.isSplit = false;
        _fonts == null ? void 0 : _fonts.removeEventListener("loadingdone", this._split);
        if (anim) {
            this._data.animTime = anim.totalTime();
            anim.revert();
        }
        (_b = (_a = this.vars).onRevert) == null ? void 0 : _b.call(_a, this);
        return this;
    }
    static create(elements, config) {
        return new _SplitText(elements, config);
    }
    static register(core) {
        gsap = gsap || core || window.gsap;
        if (gsap) {
            _toArray = gsap.utils.toArray;
            _context = gsap.core.context || _context;
        }
        if (!_coreInitted && window.innerWidth > 0) {
            _fonts = document.fonts;
            _coreInitted = true;
        }
    }
};
_SplitText.version = "3.13.0";
let SplitText = _SplitText;
;
}),
]);

//# sourceMappingURL=_3b7b6d18._.js.map