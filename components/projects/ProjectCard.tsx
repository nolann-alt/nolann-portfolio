import Link from "next/link";
import { BASE_PATH } from "@/lib/constants";
import { Project } from "@/data/projects";
import type { Lang } from "@/lib/i18n";

type ProjectCardProps = {
    project: Project;
    animationClassName: string;
    descriptionClassName?: string;
    lang: Lang;
};

export default function ProjectCard({
    project,
    animationClassName,
    descriptionClassName = "max-w-xs text-sm",
    lang,
}: ProjectCardProps) {
    return (
        <Link key={project.id} href={`/${lang}/projects/${project.slug}`} className="block">
            <article className="group relative overflow-hidden border border-ink/15 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1">
                <div className={`${animationClassName} relative aspect-[4/3] overflow-hidden`}>
                    <img src={`${BASE_PATH}${project.image}`} alt={project.title} className="h-full w-full object-contain bg-dark transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-5 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <h3 className="text-2xl font-bold leading-tight">{project.title}</h3>
                        <p className={`mt-2 ${descriptionClassName} text-white/80`}>{project.shortDescription}</p>
                    </div>
                </div>
            </article>
        </Link>
    );
}
