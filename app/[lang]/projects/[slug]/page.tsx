import { getProjects, getProjectBySlug, getNextProject, getPreviousProject } from "@/data/projects";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectAbout from "@/components/projects/ProjectAbout";
import ProjectScreenshots from "@/components/projects/ProjectScreenshots";
import ProjectNavigation from "@/components/projects/ProjectNavigation";
import PageEndSection from "@/components/shared/PageEndSection";
import type { Lang } from "@/lib/i18n";

// generateStaticParams : génère toutes les combinaisons lang × slug
// Ex : /fr/projects/grundy-game, /en/projects/grundy-game, etc.
export function generateStaticParams() {
    const langs: Lang[] = ["fr", "en"];
    return langs.flatMap((lang) =>
        getProjects(lang).map((project) => ({ lang, slug: project.slug }))
    );
}

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ lang: Lang; slug: string }>;
}) {
    const { slug, lang } = await params;

    const project = getProjectBySlug(slug, lang);
    const nextProject = getNextProject(slug, lang);
    const previousProject = getPreviousProject(slug, lang);

    if (!project) {
        return (
            <main className="min-h-screen bg-page flex items-center justify-center">
                <p className="text-white">Projet non trouvé</p>
            </main>
        );
    }

    return (
        <>
            <ProjectHero project={project} nextProject={nextProject} previousProject={previousProject} />
            {project.overview && project.coreFeatures && (
                <ProjectAbout
                    overview={project.overview}
                    coreFeatures={project.coreFeatures}
                    technologies={project.technologies || []}
                    links={{ demo: project.demoLink, github: project.repoLink }}
                />
            )}
            {project.screenshots && project.screenshots.length > 0 && (
                <ProjectScreenshots screenshots={project.screenshots} />
            )}
            <ProjectNavigation
                nextProject={nextProject ? { slug: nextProject.slug, title: nextProject.title, image: nextProject.image } : null}
                previousProject={previousProject ? { slug: previousProject.slug, title: previousProject.title, image: previousProject.image } : null}
            />
            <div className="w-full flex h-[10vh] md:h-[25vh]"></div>
            <PageEndSection />
        </>
    );
}
