import type { MetadataRoute } from "next";
import { getProjects } from "@/data/projects";

const BASE_URL = "https://nolann-alt.github.io/nolann-portfolio";
const LOCALES = ["fr", "en"] as const;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes = LOCALES.flatMap((lang) => [
        {
            url: `${BASE_URL}/${lang}/`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: lang === "fr" ? 1 : 0.8,
        },
        {
            url: `${BASE_URL}/${lang}/about/`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        },
        {
            url: `${BASE_URL}/${lang}/experiences/`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/${lang}/projects/`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        },
    ]);

    const projectRoutes = LOCALES.flatMap((lang) =>
        getProjects(lang).map((project) => ({
            url: `${BASE_URL}/${lang}/projects/${project.slug}/`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: project.featured ? 0.7 : 0.5,
        }))
    );

    return [...staticRoutes, ...projectRoutes];
}