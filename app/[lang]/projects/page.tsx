import AllProjects from "@/components/projects/AllProjects";
import type { Lang } from "@/lib/i18n";

export function generateStaticParams(): { lang: Lang }[] {
    return [{ lang: "fr" }, { lang: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }) {
    const { lang } = await params;
    return lang === "fr"
        ? { title: "Projets — Nolann Lescop", description: "Projets de Nolann Lescop" }
        : { title: "Projects — Nolann Lescop", description: "Projects by Nolann Lescop" };
}

export default function ProjectsPage() {
    return <AllProjects />;
}
