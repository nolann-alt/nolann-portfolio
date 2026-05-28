// Server Component — peut exporter generateStaticParams() car pas de "use client"
// Tout le contenu (animations GSAP, useLang...) est dans AboutContent.tsx
import AboutContent from "@/components/about/AboutContent";
import type { Lang } from "@/lib/i18n";

export function generateStaticParams(): { lang: Lang }[] {
    return [{ lang: "fr" }, { lang: "en" }];
}

export default function AboutPage() {
    return <AboutContent />;
}
