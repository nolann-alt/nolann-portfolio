import "./globals.css";
import Intro from "@/components/home/Intro";
import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import TextParagraph from "@/components/shared/TextParagraph";
import PageEndSection from "@/components/shared/PageEndSection";

export const metadata = {
    title: "Nolann Lescop Portfolio",
    description: "Portfolio of Nolann Lescop",
};

/**
 * Page d'accueil
 * @description Composition des composants: Intro, Hero, FeaturedProjects, TextParagraph, PageEndSection
 * @route /
 */
export default function Home() {
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