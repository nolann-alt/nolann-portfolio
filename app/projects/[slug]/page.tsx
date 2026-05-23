import { projects, getProjectBySlug, getNextProject, getPreviousProject } from "@/data/projects";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectAbout from "@/components/projects/ProjectAbout";
import ProjectScreenshots from "@/components/projects/ProjectScreenshots";
import ProjectNavigation from "@/components/projects/ProjectNavigation";
import PageEndSection from "@/components/shared/PageEndSection";

/**
 * generateStaticParams - Génère les routes statiques des projets
 * @description Nécessaire pour l'export statique de chaque page /projects/[slug].
 */
export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

/**
 * ProjectDetailPage - Page de détail d'un projet
 * @description Assemble le hero, le contenu du projet, la navigation et le CTA final.
 * @route /projects/[slug]
 * @async Server component
 */
export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const project = getProjectBySlug(slug);
    const nextProject = getNextProject(slug);
    const previousProject = getPreviousProject(slug);

    if (!project) {
        return <main className="min-h-screen bg-page flex items-center justify-center"><p className="text-white">Projet non trouvé</p></main>;
    }

    return (
        <>
            <ProjectHero project={project} nextProject={nextProject} previousProject={previousProject} />
            {project.overview && project.coreFeatures && (
                <ProjectAbout overview={project.overview} coreFeatures={project.coreFeatures} technologies={project.technologies || []} links={{ demo: project.demoLink, github: project.repoLink }} />
            )}
            {project.screenshots && project.screenshots.length > 0 && <ProjectScreenshots screenshots={project.screenshots} />}
            <ProjectNavigation nextProject={nextProject ? { slug: nextProject.slug, title: nextProject.title, image: nextProject.image } : null} previousProject={previousProject ? { slug: previousProject.slug, title: previousProject.title, image: previousProject.image } : null} />
            <div className="w-full flex h-[10vh] md:h-[25vh]"></div>
            <PageEndSection />
        </>
    );
}