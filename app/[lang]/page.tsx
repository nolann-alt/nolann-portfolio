import Intro from "@/components/home/Intro";
import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TextParagraph from "@/components/shared/TextParagraph";
import PageEndSection from "@/components/shared/PageEndSection";
import type { Lang } from "@/lib/i18n";

export function generateStaticParams(): { lang: Lang }[] {
    return [{ lang: "fr" }, { lang: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
    const { lang } = await params;
    return {
        title: lang === "fr" ? "Portfolio Nolann Lescop" : "Nolann Lescop Portfolio",
        description: lang === "fr" ? "Portfolio de Nolann Lescop" : "Portfolio of Nolann Lescop",
    };
}

export default function HomePage() {
    return (
        <div className="relative">
            <Intro />
            <div className="w-[98vw] mx-auto flex justify-between">
                <div className="w-2 md:w-4 h-2 md:h-4 bg-ink rounded-full"></div>
                <div className="w-2 md:w-4 h-2 md:h-4 bg-ink rounded-full"></div>
            </div>
            <Hero />
            <div className="w-[98vw] mx-auto flex justify-between">
                <div className="w-2 md:w-4 h-2 md:h-4 bg-ink rounded-full"></div>
                <div className="w-2 md:w-4 h-2 md:h-4 bg-ink rounded-full"></div>
            </div>
            <FeaturedProjects />
            <TextParagraph />
            <div className="w-full flex h-[10vh] md:h-[25vh]"></div>
            <PageEndSection />
        </div>
    );
}
