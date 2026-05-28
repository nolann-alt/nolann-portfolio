import type { Lang } from "@/lib/i18n";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────

export type ProjectTech = {
    category: string;
    items: string[];
};

export type ProjectLinks = {
    demo?: string;
    github?: string;
};

// Données non-traduisibles : identiques quelle que soit la langue
type ProjectBase = {
    id: number;
    slug: string;
    image: string;
    tags: string[];
    year: number;
    repoLink?: string;
    demoLink?: string;
    hoverVideo?: string;
    featured?: boolean;
    technologies?: ProjectTech[];
    links?: ProjectLinks;
    screenshots?: string[];
};

// Textes traduisibles par projet
type ProjectTranslation = {
    title: string;
    shortDescription: string;
    description: string;
    overview?: string;
    coreFeatures?: string;
};

// Type complet = base + traduction (utilisé partout dans l'app)
export type Project = ProjectBase & ProjectTranslation;

// ─────────────────────────────────────────────
// Données communes (pas de texte ici)
// ─────────────────────────────────────────────

const projectsBase: ProjectBase[] = [
    {
        id: 1,
        slug: "skills-portfolio",
        image: "/projects/portfolio_notion.jpg",
        tags: ["Notion", "Design"],
        year: 2025,
        repoLink: "#",
        demoLink: "https://lescop-nolann.notion.site/Portfolio-de-comp-ences-BUT-informatique-IUT-de-Vannes-1bc65c526a3880dd8b51caef7c8637ae",
        hoverVideo: "/projects/previews/portfolio.mp4",
        featured: true,
        technologies: [
            { category: "Frontend", items: ["Next.js 16", "TypeScript", "React", "Tailwind CSS"] },
            { category: "Animations", items: ["GSAP", "ScrollTrigger", "SplitText"] },
            { category: "Icons & Tools", items: ["Lucide React", "Google Fonts"] },
            { category: "Deployment", items: ["GitHub Pages", "GitHub Actions"] },
        ],
        screenshots: [
            "/projects/screenshots/portfolio_notion/notion_1.png",
            "/projects/screenshots/portfolio_notion/notion_2.png",
        ],
    },
    {
        id: 2,
        slug: "old-portfolio-website",
        image: "/projects/old_website.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
        year: 2024,
        repoLink: "https://github.com/nolann-alt/site-nolann-lescop",
        demoLink: "https://nolann-alt.github.io/site-nolann-lescop/",
        hoverVideo: "/projects/previews/old-portfolio.mp4",
        featured: true,
        technologies: [
            { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript"] },
            { category: "Design", items: ["CSS Grid", "Flexbox", "Media Queries"] },
            { category: "Deployment", items: ["GitHub Pages"] },
        ],
        screenshots: [
            "/projects/screenshots/old-portfolio-1.jpg",
            "/projects/screenshots/old-portfolio-2.jpg",
        ],
    },
    {
        id: 3,
        slug: "grundy-game",
        image: "/projects/Grundy.jpg",
        tags: ["Java", "Algorithmie"],
        year: 2025,
        repoLink: "https://github.com/nolann-alt/SAE_S1.02",
        demoLink: "https://www.youtube.com/watch?v=hvCCPTWwUAY",
        hoverVideo: "/projects/previews/grundy.mp4",
        featured: true,
        technologies: [
            { category: "Langage", items: ["Java"] },
            { category: "Concepts", items: ["Algorithmie", "Théorie des jeux", "Analyse complexité"] },
            { category: "Outils", items: ["Eclipse", "JUnit (tests)"] },
        ],
        screenshots: [
            "/projects/screenshots/grundy-game-1.jpg",
            "/projects/screenshots/grundy-game-2.jpg",
        ],
    },
    {
        id: 4,
        slug: "step-by-step",
        image: "/projects/step-by-step.jpg",
        tags: ["JavaScript", "Java", "Python"],
        year: 2025,
        repoLink: "https://github.com/nolann-alt/step-by-step",
        demoLink: "#",
        hoverVideo: "/projects/previews/step-by-step.mp4",
        featured: true,
        technologies: [
            { category: "Langages", items: ["JavaScript", "Java", "Python", "HTML", "CSS"] },
            { category: "Concepts", items: ["POO", "Algorithmie", "SQL", "DOM"] },
            { category: "Outils", items: ["VS Code", "Git", "Node.js"] },
        ],
        screenshots: [
            "/projects/screenshots/step-by-step-1.jpg",
            "/projects/screenshots/step-by-step-2.jpg",
        ],
    },
    {
        id: 5,
        slug: "project-five",
        image: "/projects/portfolio_notion.jpg",
        tags: ["Next.js", "UI"],
        year: 2025,
    },
    {
        id: 6,
        slug: "project-six",
        image: "/projects/old_website.jpg",
        tags: ["TypeScript", "Frontend"],
        year: 2025,
    },
];

// ─────────────────────────────────────────────
// Traductions françaises
// ─────────────────────────────────────────────

const translationsFr: Record<string, ProjectTranslation> = {
    "skills-portfolio": {
        title: "Portfolio de Compétences",
        shortDescription: "Portfolio de compétences pour le BUT Informatique.",
        description: "Portfolio de compétences pour le BUT Informatique à l'IUT de Vannes, avec des preuves de progression, SAÉ et réflexions personnelles.",
        overview: "Ce portfolio a été créé pour répondre aux exigences du BUT Informatique à l'IUT de Vannes. Il met en valeur mes compétences techniques à travers des projets concrets, des preuves de progression et des réflexions personnelles sur mon parcours.",
        coreFeatures: "Portfolio Notion présentant comment j'ai justifié chaque compétence du BUT Informatique à travers les SAÉ réalisés en groupe. Chaque compétence est démontrée par des projets concrets avec preuves de progression, analyses réflexives et évaluations.",
    },
    "old-portfolio-website": {
        title: "Ancien Portfolio",
        shortDescription: "Mon ancien portfolio personnel.",
        description: "Mon premier portfolio personnel pour présenter mes projets, mes compétences et mon parcours en développement front-end.",
        overview: "Mon premier portfolio personnel créé lors de mes premiers mois en BUT Informatique. Ce projet m'a permis de mettre en pratique les bases du développement web (HTML, CSS, JavaScript) tout en créant une présence en ligne professionnelle.",
        coreFeatures: "Site statique avec animations CSS et design responsive. Présentation de mes projets, compétences et parcours en développement front-end.",
    },
    "grundy-game": {
        title: "Grundy Game",
        shortDescription: "Comparaison d'algorithmes sur le Grundy Game.",
        description: "Projet universitaire de comparaison et optimisation d'algorithmes en Java avec analyse de performance et approche mathématique.",
        overview: "Projet universitaire de la SAÉ S1.02 visant à comparer différents algorithmes de résolution du Grundy Game. Ce projet m'a permis d'approfondir mes connaissances en algorithmie, en analyse de complexité et en optimisation.",
        coreFeatures: "Implémentation de plusieurs stratégies de résolution du Grundy Game en Java. Comparaison des algorithmes selon leur efficacité et analyse de leur complexité.",
    },
    "step-by-step": {
        title: "Step-by-Step",
        shortDescription: "Répertoire d'exercices et mini-projets.",
        description: "Collection d'exercices et mini-projets pour renforcer mes bases en JavaScript, Java, HTML, CSS et Python.",
        overview: "Repository personnel contenant tous les exercices et mini-projets réalisés pour consolider mes bases en programmation. Ce répertoire témoigne de ma progression dans différents langages et technologies.",
        coreFeatures: "Exercices et mini-projets en plusieurs langages (JavaScript, Java, Python, HTML, CSS). Chaque dossier contient des exercices guidés et des défis personnels.",
    },
    "project-five": {
        title: "Projet Cinq",
        shortDescription: "Projet supplémentaire à compléter.",
        description: "Projet supplémentaire à compléter.",
    },
    "project-six": {
        title: "Projet Six",
        shortDescription: "Projet supplémentaire à compléter.",
        description: "Projet supplémentaire à compléter.",
    },
};

// ─────────────────────────────────────────────
// Traductions anglaises
// ─────────────────────────────────────────────

const translationsEn: Record<string, ProjectTranslation> = {
    "skills-portfolio": {
        title: "Skills Portfolio",
        shortDescription: "Skills portfolio for the Computer Science degree.",
        description: "Skills portfolio for the Computer Science B.U.T. at IUT de Vannes, featuring progress evidence, SAÉ projects and personal reflections.",
        overview: "This portfolio was created to meet the requirements of the Computer Science B.U.T. at IUT de Vannes. It showcases my technical skills through concrete projects, progress evidence and personal reflections on my journey.",
        coreFeatures: "Notion portfolio demonstrating how I validated each B.U.T. competency through group SAÉ projects. Each competency is proven through concrete projects with progress evidence, reflective analyses and assessments.",
    },
    "old-portfolio-website": {
        title: "Old Portfolio Website",
        shortDescription: "My first personal portfolio website.",
        description: "My first personal portfolio to present my projects, skills and front-end development journey.",
        overview: "My first personal portfolio built during my first months in the Computer Science B.U.T. This project let me practice web development basics (HTML, CSS, JavaScript) while creating a professional online presence.",
        coreFeatures: "Static website with CSS animations and responsive design. Showcases my projects, skills and front-end development journey.",
    },
    "grundy-game": {
        title: "Grundy Game",
        shortDescription: "Algorithm comparison on the Grundy Game.",
        description: "University project comparing and optimising algorithms in Java with performance analysis and a mathematical approach.",
        overview: "University SAÉ S1.02 project comparing different algorithms for solving the Grundy Game. This project deepened my knowledge in algorithmics, complexity analysis and optimisation.",
        coreFeatures: "Implementation of multiple Grundy Game solving strategies in Java. Algorithms compared by efficiency with complexity analysis.",
    },
    "step-by-step": {
        title: "Step-by-Step",
        shortDescription: "Repository of exercises and mini-projects.",
        description: "Collection of exercises and mini-projects to reinforce my foundations in JavaScript, Java, HTML, CSS and Python.",
        overview: "Personal repository containing all exercises and mini-projects built to consolidate my programming foundations. It documents my progression across different languages and technologies.",
        coreFeatures: "Exercises and mini-projects in multiple languages (JavaScript, Java, Python, HTML, CSS). Each folder contains guided exercises and personal challenges.",
    },
    "project-five": {
        title: "Project Five",
        shortDescription: "Additional project to be completed.",
        description: "Additional project to be completed.",
    },
    "project-six": {
        title: "Project Six",
        shortDescription: "Additional project to be completed.",
        description: "Additional project to be completed.",
    },
};

// ─────────────────────────────────────────────
// Fonctions d'accès
// ─────────────────────────────────────────────

// Retourne tous les projets fusionnés avec les traductions de la langue donnée
export function getProjects(lang: Lang): Project[] {
    const t = lang === "fr" ? translationsFr : translationsEn;
    return projectsBase.map((p) => ({ ...p, ...t[p.slug] }));
}

export function getFeaturedProjects(lang: Lang): Project[] {
    return getProjects(lang).filter((p) => p.featured);
}

export function getProjectBySlug(slug: string, lang: Lang): Project | undefined {
    return getProjects(lang).find((p) => p.slug === slug);
}

export function getNextProject(slug: string, lang: Lang): Project | null {
    const all = getProjects(lang);
    const index = all.findIndex((p) => p.slug === slug);
    return index === -1 || index === all.length - 1 ? null : all[index + 1];
}

export function getPreviousProject(slug: string, lang: Lang): Project | null {
    const all = getProjects(lang);
    const index = all.findIndex((p) => p.slug === slug);
    return index <= 0 ? null : all[index - 1];
}
