/**
 * Page Experiences - Parcours, formations et compétences
 * @description Assemble les 3 colonnes : SubjectProfile | FormationTimeline | SkillsPanel
 * @route /experiences
 * @component Server (pas de "use client" — on peut exporter metadata depuis un Server Component)
 */

import ExperiencesHero from "@/components/experiences/ExperiencesHero";
import SubjectProfile from "@/components/experiences/SubjectProfile";
import FormationTimeline from "@/components/experiences/FormationTimeline";
import SkillsPanel from "@/components/experiences/SkillsPanel";
import PageEndSection from "@/components/shared/PageEndSection";

// metadata : en Next.js App Router, cette constante est lue automatiquement par le framework
// pour renseigner les balises <title> et <meta description> de la page (SEO)
export const metadata = {
    title: "Experiences — Nolann Lescop",
    description: "Education, work experiences and skills of Nolann Lescop.",
};

export default function ExperiencesPage() {
    return (
        <main className="relative overflow-hidden">
            <ExperiencesHero />

            <section className="w-[98vw] mx-auto px-4 md:px-8 md:py-5">
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
            </section>

            {/* Espace avant la section de fin pour aérer la page */}
            <div className="w-full h-28 md:h-48" />
            <PageEndSection />
        </main>
    );
}
