import ExperiencesHero from "@/components/experiences/ExperiencesHero";
import SubjectProfile from "@/components/experiences/SubjectProfile";
import FormationTimeline from "@/components/experiences/FormationTimeline";
import SkillsPanel from "@/components/experiences/SkillsPanel";
import PageEndSection from "@/components/shared/PageEndSection";
import { getDictionary, type Lang } from "@/lib/i18n";

export function generateStaticParams(): { lang: Lang }[] {
    return [{ lang: "fr" }, { lang: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
    const { lang } = await params;
    return lang === "fr"
        ? { title: "Expériences — Nolann Lescop", description: "Formation, expériences et compétences." }
        : { title: "Experiences — Nolann Lescop", description: "Education, work experiences and skills." };
}

export default async function ExperiencesPage({ params }: { params: Promise<{ lang: Lang }> }) {
    const { lang } = await params;
    const t = getDictionary(lang);

    return (
        <section className="relative overflow-hidden">
            <ExperiencesHero />

            <div className="w-[98vw] mx-auto px-4 md:px-8 md:py-5">
                {/*
                    Grille 3 colonnes sur grand écran (lg = 1024px+) :
                    - Colonne 1 (SubjectProfile) : entre 280px et 320px de large
                    - Colonne 2 (FormationTimeline) : prend tout l'espace restant (1fr)
                    - Colonne 3 (SkillsPanel) : entre 260px et 300px de large
                    Sur mobile/tablette : flex-col, les 3 blocs s'empilent verticalement
                */}
                <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(290px,330px)_1fr_minmax(260px,300px)] lg:gap-8 xl:gap-12">
                    <SubjectProfile />
                    <FormationTimeline />
                    <SkillsPanel />
                </div>
            </div>

            <div className="w-full h-28 md:h-48" />
            {/* On passe les textes traduits en props à PageEndSection */}
            <PageEndSection title={t.shared.pageEndTitle} ctaLabel={t.shared.pageEndCta} />
        </section>
    );
}
