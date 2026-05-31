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
    notion?: string;
};

// string        → image pleine largeur
// string[]      → groupe d'images affichées côte à côte sur une ligne
export type ScreenshotItem = string | string[];

// Données non-traduisibles : identiques quelle que soit la langue
type ProjectBase = {
    id: number;
    slug: string;
    image: string;       // vignette (card) — ratio 4:3, ~800×600px
    heroImage?: string;  // image plein écran du héro — ratio 16:9, ~1920×1080px (fallback sur image si absent)
    year: number;
    repoLink?: string;
    demoLink?: string;
    notion?: string;
    hoverVideo?: string;
    featured?: boolean;
    links?: ProjectLinks;
    screenshots?: ScreenshotItem[];
};

// Textes traduisibles par projet
// tags et technologies sont ici car leurs libellés changent selon la langue
type ProjectTranslation = {
    title: string;
    shortDescription: string;
    description: string;
    overview?: string;
    coreFeatures?: string;
    tags: string[];
    technologies?: ProjectTech[];
};

// Type complet = base + traduction (utilisé partout dans l'app)
export type Project = ProjectBase & ProjectTranslation;

// ─────────────────────────────────────────────
// Données communes (pas de texte ici)
// ─────────────────────────────────────────────

const projectsBase: ProjectBase[] = [
    {
        id: 1,
        slug: "sae-biathlon",
        image: "/projects/screenshots/SAE_Biathlon/renard.png",
        heroImage: "/projects/screenshots/SAE_Biathlon/renard.png",
        year: 2026,
        repoLink: "https://github.com/nolann-alt/SAE-Biathlon-Dual-",
        demoLink: undefined,
        hoverVideo: undefined,
        notion: "https://glenpotay.notion.site/biathlon-a",
        featured: true,
        screenshots: [
            [
                "/projects/screenshots/SAE_Biathlon/dual_1.png",
                "/projects/screenshots/SAE_Biathlon/dual_2.png",
                "/projects/screenshots/SAE_Biathlon/dual_3.png",
                "/projects/screenshots/SAE_Biathlon/dual_4.png",
                "/projects/screenshots/SAE_Biathlon/dual_5.png",
                "/projects/screenshots/SAE_Biathlon/dual_6.png",
                "/projects/screenshots/SAE_Biathlon/dual_7.png",
                "/projects/screenshots/SAE_Biathlon/dual_8.png",
                "/projects/screenshots/SAE_Biathlon/dual_9.png",
                "/projects/screenshots/SAE_Biathlon/dual_10.png",
                "/projects/screenshots/SAE_Biathlon/dual_11.png",
                "/projects/screenshots/SAE_Biathlon/dual_12.png",
                "/projects/screenshots/SAE_Biathlon/dual_13.png",
                "/projects/screenshots/SAE_Biathlon/dual_14.png",
                "/projects/screenshots/SAE_Biathlon/dual_15.png",
                "/projects/screenshots/SAE_Biathlon/dual_16.png",
                "/projects/screenshots/SAE_Biathlon/dual_17.png",
                "/projects/screenshots/SAE_Biathlon/dual_18.png",
                "/projects/screenshots/SAE_Biathlon/dual_20.png",
                "/projects/screenshots/SAE_Biathlon/dual_21.png",
                "/projects/screenshots/SAE_Biathlon/dual_22.png",
                "/projects/screenshots/SAE_Biathlon/dual_23.png",
                "/projects/screenshots/SAE_Biathlon/dual_24.png",
                "/projects/screenshots/SAE_Biathlon/dual_25.png",
                "/projects/screenshots/SAE_Biathlon/dual_26.png",
                "/projects/screenshots/SAE_Biathlon/dual_27.png",
                "/projects/screenshots/SAE_Biathlon/dual_28.png",
                "/projects/screenshots/SAE_Biathlon/dual_29.png",
                "/projects/screenshots/SAE_Biathlon/dual_30.png",
                "/projects/screenshots/SAE_Biathlon/dual_31.png",
                "/projects/screenshots/SAE_Biathlon/dual_32.png",
            ]
        ],
    },
    {
        id: 2,
        slug: "sae-secouristes",
        image: "/projects/screenshots/SAE_Secouriste/logo.png",
        heroImage: "/projects/screenshots/SAE_Secouriste/logo.png",
        year: 2025,
        repoLink: "https://github.com/nolann-alt/SAE-Secouristes",
        demoLink: "https://www.figma.com/proto/jzgGF8t1TRQbabXwSmvUrA/Maquette-AmbuLympic?node-id=25-242&starting-point-node-id=25%3A242",
        hoverVideo: undefined,
        featured: true,
        screenshots: [
            "/projects/screenshots/SAE_Secouriste/maquette.png",
            [
                "/projects/screenshots/SAE_Secouriste/ambulympics_1.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_2.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_3.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_4.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_4a.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_4b.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_4c.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_5.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_6.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_7.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_8.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_9.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_10.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_11.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_12.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_13.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_14.png",
                "/projects/screenshots/SAE_Secouriste/ambulympics_15.png",
            ]
            
        ],
    },
    {
        id: 3,
        slug: "portfolio-nextjs",
        image: "/projects/screenshots/portfolio-next/portfolio_next_logo.png",
        heroImage: "/projects/screenshots/portfolio-next/portfolio_next_hero.png",
        year: 2026,
        repoLink: "https://github.com/nolann-alt",
        demoLink: "https://nolann-alt.github.io/nolann-portfolio/",
        hoverVideo: "/projects/previews/portfolio-next.mp4",
        featured: true,
        screenshots: [
            "/projects/screenshots/portfolio-next/portfolio_next.png",
            "/projects/screenshots/portfolio-next/portfolio_next_2.png",
            "/projects/screenshots/portfolio-next/portfolio_next_3.png",
        ],
    },
    {
        id: 4,
        slug: "kitchen-chaos",
        image: "/projects/screenshots/Kitchen_Chaos/logo.jpg",
        heroImage: "/projects/screenshots/Kitchen_Chaos/logo.jpg",
        year: 2026,
        repoLink: undefined,
        demoLink: undefined,
        hoverVideo: undefined,
        featured: true,
        screenshots: [
            "/projects/screenshots/Kitchen_Chaos/kitchen_chaos_1.png",
            [
            "/projects/screenshots/Kitchen_Chaos/kitchen_chaos_2.png",
            "/projects/screenshots/Kitchen_Chaos/kitchen_chaos_3.png",
            "/projects/screenshots/Kitchen_Chaos/kitchen_chaos_4.png",
            ]
            
        ],
    },
    {
        id: 5,
        slug: "mongolingo",
        image: "/projects/screenshots/Mongolingo/logo.png",
        heroImage: "/projects/screenshots/Mongolingo/hero.png",
        year: 2026,
        repoLink: "https://github.com/nolann-alt/Mongolingo",
        demoLink: "https://www.youtube.com/watch?v=cdZKjIZXkQw",
        hoverVideo: undefined,
        featured: false,
        screenshots: [
            "/projects/screenshots/Mongolingo/mongolingo_1.png",
            "/projects/screenshots/Mongolingo/mongolingo_2.png",
            "/projects/screenshots/Mongolingo/mongolingo_3.png",
            "/projects/screenshots/Mongolingo/mongolingo_4.png",
            "/projects/screenshots/Mongolingo/mongolingo_5.png",
            "/projects/screenshots/Mongolingo/mongolingo_5.1.png",
            "/projects/screenshots/Mongolingo/mongolingo_6.png",
            "/projects/screenshots/Mongolingo/mongolingo_7.png",
        ],
    },
    {
        id: 6,
        slug: "vorance",
        image: "/projects/screenshots/Vorance/logo.png",
        heroImage: "/projects/screenshots/Vorance/hero.png",
        year: 2025,
        repoLink: "https://github.com/nolann-alt/Vorance",
        demoLink: "https://www.youtube.com/watch?v=eUEtnTBii20",
        hoverVideo: undefined,
        featured: false,
        screenshots: [
                "/projects/screenshots/Vorance/vorance_0.png",
            [
                "/projects/screenshots/Vorance/vorance_1.jpg",
                "/projects/screenshots/Vorance/vorance_2.jpg",
                "/projects/screenshots/Vorance/vorance_3.jpg",
                "/projects/screenshots/Vorance/vorance_4.jpg",
                "/projects/screenshots/Vorance/vorance_5.jpg",
                "/projects/screenshots/Vorance/vorance_6.jpg",
                "/projects/screenshots/Vorance/vorance_7.jpg",
                "/projects/screenshots/Vorance/vorance_8.jpg",
                "/projects/screenshots/Vorance/vorance_9.jpg",
                "/projects/screenshots/Vorance/vorance_10.jpg",
                "/projects/screenshots/Vorance/vorance_11.jpg",
                "/projects/screenshots/Vorance/vorance_12.jpg",
                "/projects/screenshots/Vorance/vorance_13.jpg",
                "/projects/screenshots/Vorance/vorance_14.jpg",
                "/projects/screenshots/Vorance/vorance_15.jpg",
            ]
        ],
    },
    {
        id: 7,
        slug: "skills-portfolio",
        image: "/projects/screenshots/portfolio_notion/notion_1.png",
        year: 2025,
        repoLink: undefined,
        notion: "https://lescop-nolann.notion.site/Portfolio-de-comp-ences-BUT-informatique-IUT-de-Vannes-1bc65c526a3880dd8b51caef7c8637ae",
        hoverVideo: "/projects/previews/portfolio.mp4",
        featured: false,
        screenshots: [
            "/projects/screenshots/portfolio_notion/notion_1.png",
            "/projects/screenshots/portfolio_notion/notion_2.png",
            "/projects/screenshots/portfolio_notion/notion_3.png",
            "/projects/screenshots/portfolio_notion/notion_4.png",
        ],
    },
    {
        id: 8,
        slug: "old-portfolio-react",
        image: "/projects/screenshots/Portfolio_React/logo.png",
        heroImage: "/projects/screenshots/Portfolio_React/hero.png",
        year: 2024,
        repoLink: "https://github.com/nolann-alt/nolann-portfolio",
        demoLink: "https://nolann-portfolio.netlify.app/#",
        hoverVideo: undefined,
        featured: false,
        screenshots: [
            "/projects/screenshots/Portfolio_React/portfolio_0.png",
            "/projects/screenshots/Portfolio_React/portfolio_1.png",
            "/projects/screenshots/Portfolio_React/portfolio_2.png",
            "/projects/screenshots/Portfolio_React/portfolio_3.png",
        ],
    },
     {
        id: 9,
        slug: "grundy-game",
        image: "/projects/screenshots/Grundy/grundy_1.png",
        year: 2025,
        repoLink: "https://github.com/nolann-alt/SAE_S1.02",
        demoLink: "https://www.youtube.com/watch?v=hvCCPTWwUAY",
        hoverVideo: "/projects/previews/grundy.mp4",
        featured: false,
        screenshots: [
            "/projects/screenshots/Grundy/grundy_2.jpg",
        ],
    },
    {
        id: 10,
        slug: "old-portfolio-website",
        image: "/projects/screenshots/Old_Website/old_portfolio_2.png",
        year: 2024,
        repoLink: "https://github.com/nolann-alt/site-nolann-lescop",
        demoLink: "https://nolann-alt.github.io/site-nolann-lescop/",
        hoverVideo: "/projects/previews/old-portfolio.mp4",
        featured: false,
        screenshots: [
            "/projects/screenshots/Old_Website/old_portfolio_1.png",
            "/projects/screenshots/Old_Website/old_portfolio_2.png",
            "/projects/screenshots/Old_Website/old_portfolio_3.png",
            "/projects/screenshots/Old_Website/old_portfolio_4.png",
            "/projects/screenshots/Old_Website/old_portfolio_5.png",
            "/projects/screenshots/Old_Website/old_portfolio_6.png",
            "/projects/screenshots/Old_Website/old_portfolio_7.png",
            "/projects/screenshots/Old_Website/old_portfolio_8.png",
        ],
    },
    {
        id: 11,
        slug: "step-by-step",
        image: "/projects/screenshots/Step_by_Step/step_by_step_1.png",
        heroImage: "/projects/screenshots/Step_by_Step/step_by_step_2.png",
        year: 2025,
        repoLink: "https://github.com/nolann-alt/step-by-step",
        demoLink: "#",
        hoverVideo: undefined,
        featured: false,
        screenshots: [],
    },    
    {
        id: 12,
        slug: "school-projects",
        image: "/projects/screenshots/School_Projects/Logo IUTVannes HD.jpg",
        heroImage: "/projects/screenshots/School_Projects/Logo IUTVannes HD.jpg",
        year: 2025,
        repoLink: "https://github.com/nolann-alt/school-projects",
        demoLink: undefined,
        hoverVideo: undefined,
        featured: false,
        screenshots: [],
    },  
];

// ─────────────────────────────────────────────
// Traductions françaises
// ─────────────────────────────────────────────

const translationsFr: Record<string, ProjectTranslation> = {
    "skills-portfolio": {
        title: "Portfolio de Compétences BUT",
        shortDescription: "Justification des 6 compétences du BUT Informatique à travers les SAE.",
        description: "Portfolio Notion regroupant la justification des 6 compétences du BUT Informatique — Réaliser, Optimiser, Administrer, Gérer, Conduire, Collaborer — à travers les SAE réalisées sur 3 ans à l'IUT de Vannes.",
        overview: "Ce portfolio Notion est un document évolutif complété chaque fin d'année. Il présente comment j'ai validé les 6 compétences officielles du BUT Informatique à travers les projets universitaires (SAE) réalisés en groupe ou individuellement.",
        coreFeatures: "Pour chaque compétence, des preuves concrètes issues des SAE illustrent ma progression : livrables, analyses réflexives et évaluations. Le portfolio sera enrichi à chaque fin d'année jusqu'en 2027.",
        tags: ["Notion", "BUT Informatique"],
        technologies: [
            { category: "Outil", items: ["Notion"] },
            { category: "Compétences BUT", items: ["Réaliser", "Optimiser", "Administrer", "Gérer", "Conduire", "Collaborer"] },
        ],
    },
    "old-portfolio-website": {
        title: "Ancien Portfolio",
        shortDescription: "Mon ancien portfolio personnel.",
        description: "Mon premier portfolio personnel pour présenter mes projets, mes compétences et mon parcours en développement front-end.",
        overview: "Mon premier portfolio personnel créé lors de mes premiers mois en BUT Informatique. Ce projet m'a permis de mettre en pratique les bases du développement web (HTML, CSS, JavaScript) tout en créant une présence en ligne professionnelle.",
        coreFeatures: "Site statique avec animations CSS et design responsive. Présentation de mes projets, compétences et parcours en développement front-end.",
        tags: ["HTML", "CSS", "JavaScript"],
        technologies: [
            { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript"] },
            { category: "Design", items: ["CSS Grid", "Flexbox", "Media Queries"] },
            { category: "Déploiement", items: ["GitHub Pages"] },
        ],
    },
    "grundy-game": {
        title: "Grundy Game",
        shortDescription: "Comparaison d'algorithmes sur le Grundy Game.",
        description: "Projet universitaire de comparaison et optimisation d'algorithmes en Java avec analyse de performance et approche mathématique.",
        overview: "Projet universitaire de la SAÉ S1.02 visant à comparer différents algorithmes de résolution du Grundy Game. Ce projet m'a permis d'approfondir mes connaissances en algorithmie, en analyse de complexité et en optimisation.",
        coreFeatures: "Implémentation de plusieurs stratégies de résolution du Grundy Game en Java. Comparaison des algorithmes selon leur efficacité et analyse de leur complexité.",
        tags: ["Java", "Algorithmie"],
        technologies: [
            { category: "Langage", items: ["Java"] },
            { category: "Concepts", items: ["Algorithmie", "Théorie des jeux", "Analyse de complexité"] },
            { category: "Outils", items: ["Eclipse", "JUnit (tests)"] },
        ],
    },
    "step-by-step": {
        title: "Step-by-Step",
        shortDescription: "Répertoire d'exercices et mini-projets.",
        description: "Collection d'exercices et mini-projets pour renforcer mes bases en JavaScript, Java, HTML, CSS et Python.",
        overview: "Repository personnel contenant tous les exercices et mini-projets réalisés pour consolider mes bases en programmation. Ce répertoire témoigne de ma progression dans différents langages et technologies.",
        coreFeatures: "Exercices et mini-projets en plusieurs langages (JavaScript, Java, Python, HTML, CSS). Chaque dossier contient des exercices guidés et des défis personnels.",
        tags: ["JavaScript", "Java", "Python"],
        technologies: [
            { category: "Langages", items: ["JavaScript", "Java", "Python", "HTML", "CSS"] },
            { category: "Concepts", items: ["POO", "Algorithmie", "SQL", "DOM"] },
            { category: "Outils", items: ["VS Code", "Git", "Node.js"] },
        ],
    },
    "portfolio-nextjs": {
        title: "Portfolio Personnel",
        shortDescription: "Portfolio développé avec Next.js 16, GSAP et TypeScript.",
        description: "Mon portfolio actuel, conçu et développé de A à Z avec Next.js 16, TypeScript et GSAP. Il présente mes projets, mon parcours et mes compétences avec un design entièrement custom.",
        overview: "Ce portfolio est le projet perso sur lequel je travaille activement. L'objectif était de créer une présence en ligne soignée avec des animations fluides, un design original et un support bilingue français / anglais.",
        coreFeatures: "Design custom avec animations GSAP (ScrollTrigger, SplitText), support bilingue FR/EN, export statique pour GitHub Pages et polices auto-hébergées via Fontsource.",
        tags: ["Next.js", "TypeScript", "GSAP"],
        technologies: [
            { category: "Frontend", items: ["Next.js 16", "React 18", "TypeScript"] },
            { category: "Style", items: ["Tailwind CSS", "daisyUI"] },
            { category: "Animations", items: ["GSAP", "ScrollTrigger", "SplitText"] },
            { category: "Polices", items: ["Bebas Neue", "Pinyon Script", "Bodoni Moda"] },
            { category: "Déploiement", items: ["GitHub Pages"] },
        ],
    },
    "sae-secouristes": {
        title: "SAE Secouristes - JO 2030",
        shortDescription: "Application mobile Java d'affectation de secouristes pour les JO d'hiver 2030.",
        description: "Application mobile développée en Java dans le cadre de la SAE S2.01/S2.02/S2.03. Elle permet aux administrateurs de gérer les affectations de secouristes et aux secouristes de consulter leurs plannings.",
        overview: "Projet universitaire réalisé en groupe de 4 à l'IUT de Vannes. L'objectif était de concevoir une application mobile complète d'affectation de secouristes pour les Jeux Olympiques d'hiver de 2030, en appliquant une architecture MVC, une base de données relationnelle et des algorithmes d'optimisation. Une maquette interactive a été réalisée sur Figma avant le démarrage du développement — consultable via le lien de démo.",
        coreFeatures: "Deux algorithmes d'affectation (exhaustif et glouton) avec comparaison de performances. Vérification du graphe de compétences (DAG). Interface JavaFX avec navigation multi-vues reliée au contrôleur MVC.",
        tags: ["Java", "JavaFX", "Algorithmie"],
        technologies: [
            { category: "Langage", items: ["Java"] },
            { category: "Interface", items: ["JavaFX", "Scene Builder"] },
            { category: "Maquette", items: ["Figma"] },
            { category: "Base de données", items: ["MySQL", "JDBC"] },
            { category: "Concepts", items: ["Architecture MVC", "Algorithmie", "Théorie des graphes"] },
            { category: "Outils", items: ["IntelliJ IDEA"] },
        ],
    },
    "sae-biathlon": {
        title: "Dual - SAE Biathlon",
        shortDescription: "Application Android de gestion de séances de biathlon scolaire pour un collège.",
        description: "Application mobile Android développée sur 2 semestres dans le cadre de la SAE S3/S4 du BUT Informatique. Livrée au Collège Notre-Dame-La-Blanche (Theix-Noyalo), elle assiste les enseignants d'EPS lors des séances de biathlon scolaire.",
        overview: "Projet universitaire réalisé en groupe de 4 à l'IUT de Vannes, en collaboration avec un vrai client : un professeur d'EPS du Collège Notre-Dame-La-Blanche. L'application fonctionne entièrement hors ligne via un réseau local ad-hoc, la tablette de l'enseignant jouant le rôle de serveur pour les élèves connectés. Les manuels utilisateur et technique sont disponibles sur le dépôt GitHub.",
        coreFeatures: "Fonctionnement 100% hors ligne via réseau local (HTTP + SSE). Gestion des séances, chronométrage, tirs laser et calcul automatique des pénalités selon la VMA. Suivi de la progression de chaque élève et export des résultats. Accès élève via QR code.",
        tags: ["Kotlin", "Android", "Ktor"],
        technologies: [
            { category: "Langage", items: ["Kotlin"] },
            { category: "Interface", items: ["XML (Android Views)"] },
            { category: "Backend embarqué", items: ["Ktor", "HTTP", "SSE"] },
            { category: "Base de données", items: ["SQLite", "Room"] },
            { category: "Réseau", items: ["Wi-Fi ad-hoc", "Réseau local"] },
            { category: "Outils", items: ["Android Studio", "Git"] },
        ],
    },
    "kitchen-chaos": {
        title: "Kitchen Chaos",
        shortDescription: "Jeu vidéo développé avec Unity pour découvrir la conception de jeux.",
        description: "Projet personnel en cours de développement, réalisé en suivant un tutoriel Unity pour apprendre les bases de la conception de jeux vidéo et explorer si ce domaine me correspond.",
        overview: "Kitchen Chaos est un projet d'apprentissage basé sur un tutoriel Unity. L'objectif n'est pas de produire un jeu commercial, mais de découvrir les fondamentaux du game design, de la physique de jeu et de la logique de gameplay à travers la pratique.",
        coreFeatures: "Projet en cours (~50% finalisé). Développement en C# avec Unity. Découverte des mécaniques de base : gestion de scènes, physique, interactions et animations.",
        tags: ["Unity", "C#", "Game Dev"],
        technologies: [
            { category: "Moteur", items: ["Unity"] },
            { category: "Langage", items: ["C#"] },
            { category: "Concepts", items: ["Game Design", "Physique de jeu", "Gestion de scènes"] },
        ],
    },
    "old-portfolio-react": {
        title: "Ancien Portfolio React",
        shortDescription: "Premier portfolio React développé pour apprendre les bases de React et Tailwind CSS.",
        description: "Portfolio personnel développé en suivant un tutoriel pour découvrir React et Tailwind CSS. Propulsé avec Vite, ce projet m'a permis de prendre en main les bases du développement front-end moderne avant de passer à Next.js.",
        overview: "Ce portfolio est le résultat de mon premier apprentissage de React via un tutoriel en ligne. L'objectif était de comprendre les composants, le JSX et l'utilisation de Tailwind CSS pour styliser une interface moderne. Il est hébergé sur Netlify.",
        coreFeatures: "Interface en composants React avec Tailwind CSS. Bundling via Vite pour un développement rapide. Déploiement continu sur Netlify.",
        tags: ["React", "Tailwind CSS", "Vite"],
        technologies: [
            { category: "Frontend", items: ["React", "JavaScript", "JSX"] },
            { category: "Style", items: ["Tailwind CSS"] },
            { category: "Outils", items: ["Vite", "Netlify"] },
        ],
    },
    "school-projects": {
        title: "Projets Scolaires",
        shortDescription: "Sélection de travaux et exercices réalisés en BUT Informatique.",
        description: "Dépôt GitHub regroupant une sélection de cours, exercices et petits projets réalisés au fil de mon parcours en BUT Informatique à l'IUT de Vannes.",
        overview: "Ce repository est un reflet de mon apprentissage académique. Il regroupe des travaux variés issus de différentes matières du BUT Informatique : programmation, algorithmie, réseaux, bases de données et plus encore.",
        coreFeatures: "Exercices et projets en Java, Python, SQL et autres langages vus en cours. Organisé par matière et par semestre.",
        tags: ["Java", "Python", "SQL"],
        technologies: [
            { category: "Langages", items: ["Java", "Python", "C", "SQL"] },
            { category: "Concepts", items: ["Algorithmie", "POO", "Réseaux", "Bases de données"] },
            { category: "Outils", items: ["Git", "GitHub"] },
        ],
    },
    "mongolingo": {
        title: "Mongolingo",
        shortDescription: "Plateforme éducative interactive pour apprendre MongoDB, inspirée de Duolingo.",
        description: "Projet universitaire réalisé en cours de NoSQL. Mongolingo permet d'apprendre et de pratiquer les requêtes MongoDB à travers des défis progressifs, avec exécution en conditions réelles sur une base de données locale.",
        overview: "Inspiré de Duolingo, Mongolingo propose un parcours de 39 requêtes MongoDB réelles réparties en 4 niveaux de difficulté. Les niveaux faciles/moyens utilisent un format QCM, tandis que les niveaux difficile/expert proposent un mode terminal avec saisie libre exécutée directement sur la base de données.",
        coreFeatures: "Mode quiz progressif avec 4 niveaux (Facile, Moyen, Difficile, Expert). Exécution en conditions réelles des requêtes sur MongoDB. Dashboard d'administration avec import/export JSON et backup BSON. Validation stricte des données via $jsonSchema.",
        tags: ["MongoDB", "React", "Node.js"],
        technologies: [
            { category: "Frontend", items: ["React", "Vite", "Tailwind CSS"] },
            { category: "Backend", items: ["Node.js", "Express"] },
            { category: "Base de données", items: ["MongoDB", "NoSQL", "mongosh"] },
            { category: "Concepts", items: ["$jsonSchema", "CRUD", "Agrégation", "Backup BSON"] },
            { category: "Outils", items: ["Git", "GitHub"] },
        ],
    },
    "vorance": {
        title: "Vorance",
        shortDescription: "Application mobile de carnet de bord numérique pour cyclistes, développée avec FlutterFlow.",
        description: "Application mobile développée avec FlutterFlow dans le cadre du cours R3.03 à l'IUT de Vannes. Vorance est un carnet de bord numérique permettant aux cyclistes d'enregistrer et visualiser leurs sorties à vélo.",
        overview: "Projet universitaire individuel motivé par ma passion du cyclisme. L'application repose sur Firebase pour l'authentification et la persistance des données, l'API Google Maps pour la visualisation des parcours, et des Custom Functions pour le calcul automatique de la vitesse moyenne (V=D/T). Tous les critères de validation ont été atteints lors de la recette finale.",
        coreFeatures: "Enregistrement manuel des sorties (distance, durée, dénivelé, ressenti). Calcul automatique de la vitesse moyenne via Custom Function. Visualisation du parcours sur carte via géocodage des villes saisies. Authentification Firebase et persistance Firestore. Mode clair/sombre avec gestion d'état global (App State).",
        tags: ["FlutterFlow", "Firebase", "Google Maps"],
        technologies: [
            { category: "Outil No-Code", items: ["FlutterFlow"] },
            { category: "Backend", items: ["Firebase Auth", "Firestore"] },
            { category: "API externes", items: ["Google Maps", "API Géocodage"] },
            { category: "Logique", items: ["Custom Functions", "App State", "Dart"] },
        ],
    },
};

// ─────────────────────────────────────────────
// Traductions anglaises
// ─────────────────────────────────────────────

const translationsEn: Record<string, ProjectTranslation> = {
    "skills-portfolio": {
        title: "B.U.T. Skills Portfolio",
        shortDescription: "Validation of the 6 B.U.T. Computer Science competencies through SAE projects.",
        description: "Notion portfolio documenting how I validated the 6 official B.U.T. Computer Science competencies — Realise, Optimise, Administer, Manage, Lead, Collaborate — through SAE projects over 3 years at IUT de Vannes.",
        overview: "This Notion portfolio is a living document updated at the end of each academic year. It shows how I validated the 6 official B.U.T. Computer Science competencies through group and individual university projects (SAE).",
        coreFeatures: "For each competency, concrete evidence from SAE projects illustrates my progression: deliverables, reflective analyses and assessments. The portfolio will be expanded each year until 2027.",
        tags: ["Notion", "B.U.T. Computer Science"],
        technologies: [
            { category: "Tool", items: ["Notion"] },
            { category: "B.U.T. Skills", items: ["Realise", "Optimise", "Administer", "Manage", "Lead", "Collaborate"] },
        ],
    },
    "old-portfolio-website": {
        title: "Old Portfolio Website",
        shortDescription: "My first personal portfolio website.",
        description: "My first personal portfolio to present my projects, skills and front-end development journey.",
        overview: "My first personal portfolio built during my first months in the Computer Science B.U.T. This project let me practice web development basics (HTML, CSS, JavaScript) while creating a professional online presence.",
        coreFeatures: "Static website with CSS animations and responsive design. Showcases my projects, skills and front-end development journey.",
        tags: ["HTML", "CSS", "JavaScript"],
        technologies: [
            { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript"] },
            { category: "Design", items: ["CSS Grid", "Flexbox", "Media Queries"] },
            { category: "Deployment", items: ["GitHub Pages"] },
        ],
    },
    "grundy-game": {
        title: "Grundy Game",
        shortDescription: "Algorithm comparison on the Grundy Game.",
        description: "University project comparing and optimising algorithms in Java with performance analysis and a mathematical approach.",
        overview: "University SAÉ S1.02 project comparing different algorithms for solving the Grundy Game. This project deepened my knowledge in algorithmics, complexity analysis and optimisation.",
        coreFeatures: "Implementation of multiple Grundy Game solving strategies in Java. Algorithms compared by efficiency with complexity analysis.",
        tags: ["Java", "Algorithmics"],
        technologies: [
            { category: "Language", items: ["Java"] },
            { category: "Concepts", items: ["Algorithmics", "Game Theory", "Complexity Analysis"] },
            { category: "Tools", items: ["Eclipse", "JUnit (tests)"] },
        ],
    },
    "step-by-step": {
        title: "Step-by-Step",
        shortDescription: "Repository of exercises and mini-projects.",
        description: "Collection of exercises and mini-projects to reinforce my foundations in JavaScript, Java, HTML, CSS and Python.",
        overview: "Personal repository containing all exercises and mini-projects built to consolidate my programming foundations. It documents my progression across different languages and technologies.",
        coreFeatures: "Exercises and mini-projects in multiple languages (JavaScript, Java, Python, HTML, CSS). Each folder contains guided exercises and personal challenges.",
        tags: ["JavaScript", "Java", "Python"],
        technologies: [
            { category: "Languages", items: ["JavaScript", "Java", "Python", "HTML", "CSS"] },
            { category: "Concepts", items: ["OOP", "Algorithmics", "SQL", "DOM"] },
            { category: "Tools", items: ["VS Code", "Git", "Node.js"] },
        ],
    },
    "portfolio-nextjs": {
        title: "Personal Portfolio",
        shortDescription: "Portfolio built with Next.js 16, GSAP and TypeScript.",
        description: "My current portfolio, designed and developed from scratch with Next.js 16, TypeScript and GSAP. It showcases my projects, background and skills with a fully custom design.",
        overview: "This portfolio is the personal project I'm actively working on. The goal was to build a polished online presence with smooth animations, an original design and bilingual French / English support.",
        coreFeatures: "Custom design with GSAP animations (ScrollTrigger, SplitText), FR/EN bilingual support, static export for GitHub Pages and self-hosted fonts via Fontsource.",
        tags: ["Next.js", "TypeScript", "GSAP"],
        technologies: [
            { category: "Frontend", items: ["Next.js 16", "React 18", "TypeScript"] },
            { category: "Style", items: ["Tailwind CSS", "daisyUI"] },
            { category: "Animations", items: ["GSAP", "ScrollTrigger", "SplitText"] },
            { category: "Fonts", items: ["Bebas Neue", "Pinyon Script", "Bodoni Moda"] },
            { category: "Deployment", items: ["GitHub Pages"] },
        ],
    },
    "sae-secouristes": {
        title: "SAE Rescue Workers - Winter Olympics 2030",
        shortDescription: "Java mobile assignment application for rescue workers at the 2030 Winter Olympics.",
        description: "Mobile application developed in Java as part of SAE S2.01/S2.02/S2.03. It allows administrators to manage rescue worker assignments and workers to view their schedules.",
        overview: "University group project at IUT de Vannes. The goal was to design a complete mobile application for rescue worker assignment at the 2030 Winter Olympics, applying MVC architecture, a relational database and optimisation algorithms. An interactive mockup was created on Figma before development started — available via the demo link.",
        coreFeatures: "Two assignment algorithms (exhaustive and greedy) with performance comparison. Skills graph validation (DAG). JavaFX interface with multi-view navigation connected to the MVC controller.",
        tags: ["Java", "JavaFX", "Algorithmics"],
        technologies: [
            { category: "Language", items: ["Java"] },
            { category: "UI", items: ["JavaFX", "Scene Builder"] },
            { category: "Mockup", items: ["Figma"] },
            { category: "Database", items: ["MySQL", "JDBC"] },
            { category: "Concepts", items: ["MVC Architecture", "Algorithmics", "Graph Theory"] },
            { category: "Tools", items: ["IntelliJ IDEA"] },
        ],
    },
    "sae-biathlon": {
        title: "Dual - Biathlon App",
        shortDescription: "Android app for managing school biathlon sessions, delivered to a real client.",
        description: "Android mobile application developed over 2 semesters as part of SAE S3/S4 of the Computer Science B.U.T. Delivered to Collège Notre-Dame-La-Blanche (Theix-Noyalo), it assists PE teachers during school biathlon sessions.",
        overview: "University group project at IUT de Vannes, built in collaboration with a real client: a PE teacher at Collège Notre-Dame-La-Blanche. The app works entirely offline via a local ad-hoc network, with the teacher's tablet acting as a server for connected students. User and technical manuals are available on the GitHub repository.",
        coreFeatures: "100% offline via local network (HTTP + SSE). Session management, timing, laser shooting and automatic penalty calculation based on MAS. Student progress tracking and results export. Student access via QR code.",
        tags: ["Kotlin", "Android", "Ktor"],
        technologies: [
            { category: "Language", items: ["Kotlin"] },
            { category: "UI", items: ["XML (Android Views)"] },
            { category: "Embedded Backend", items: ["Ktor", "HTTP", "SSE"] },
            { category: "Database", items: ["SQLite", "Room"] },
            { category: "Network", items: ["Ad-hoc Wi-Fi", "Local network"] },
            { category: "Tools", items: ["Android Studio", "Git"] },
        ],
    },
    "kitchen-chaos": {
        title: "Kitchen Chaos",
        shortDescription: "Video game developed with Unity to discover game design.",
        description: "Personal project currently in development, built by following a Unity tutorial to learn the basics of game design and explore whether this field interests me.",
        overview: "Kitchen Chaos is a learning project based on a Unity tutorial. The goal is not to produce a commercial game, but to discover the fundamentals of game design, game physics and gameplay logic through hands-on practice.",
        coreFeatures: "Work in progress (~50% complete). Developed in C# with Unity. Exploring core mechanics: scene management, physics, interactions and animations.",
        tags: ["Unity", "C#", "Game Dev"],
        technologies: [
            { category: "Engine", items: ["Unity"] },
            { category: "Language", items: ["C#"] },
            { category: "Concepts", items: ["Game Design", "Game Physics", "Scene Management"] },
        ],
    },
    "old-portfolio-react": {
        title: "Old React Portfolio",
        shortDescription: "First React portfolio built to learn the basics of React and Tailwind CSS.",
        description: "Personal portfolio developed by following an online tutorial to discover React and Tailwind CSS. Powered by Vite, this project helped me get comfortable with modern front-end development before moving on to Next.js.",
        overview: "This portfolio was the result of my first React learning experience through an online tutorial. The goal was to understand components, JSX and how to use Tailwind CSS to style a modern interface. It is hosted on Netlify.",
        coreFeatures: "React component-based interface with Tailwind CSS. Vite bundling for fast development. Continuous deployment on Netlify.",
        tags: ["React", "Tailwind CSS", "Vite"],
        technologies: [
            { category: "Frontend", items: ["React", "JavaScript", "JSX"] },
            { category: "Style", items: ["Tailwind CSS"] },
            { category: "Tools", items: ["Vite", "Netlify"] },
        ],
    },
    "school-projects": {
        title: "School Projects",
        shortDescription: "Selection of coursework and exercises from the Computer Science B.U.T.",
        description: "GitHub repository gathering a selection of courses, exercises and small projects completed throughout my Computer Science B.U.T. at IUT de Vannes.",
        overview: "This repository reflects my academic learning journey. It brings together various assignments from different B.U.T. Computer Science subjects: programming, algorithmics, networks, databases and more.",
        coreFeatures: "Exercises and projects in Java, Python, SQL and other languages covered in class. Organised by subject and semester.",
        tags: ["Java", "Python", "SQL"],
        technologies: [
            { category: "Languages", items: ["Java", "Python", "C", "SQL"] },
            { category: "Concepts", items: ["Algorithmics", "OOP", "Networks", "Databases"] },
            { category: "Tools", items: ["Git", "GitHub"] },
        ],
    },
    "mongolingo": {
        title: "Mongolingo",
        shortDescription: "Interactive educational platform to learn MongoDB, inspired by Duolingo.",
        description: "University project built during a NoSQL course. Mongolingo allows users to learn and practice MongoDB queries through progressive challenges, with real execution on a local database.",
        overview: "Inspired by Duolingo, Mongolingo offers a learning path of 39 real MongoDB queries across 4 difficulty levels. Easy/medium levels use a QCM format, while hard/expert levels offer a terminal mode with free input executed directly on the database.",
        coreFeatures: "Progressive quiz mode with 4 levels (Easy, Medium, Hard, Expert). Real-time query execution on MongoDB. Admin dashboard with JSON import/export and BSON backup. Strict data validation via $jsonSchema.",
        tags: ["MongoDB", "React", "Node.js"],
        technologies: [
            { category: "Frontend", items: ["React", "Vite", "Tailwind CSS"] },
            { category: "Backend", items: ["Node.js", "Express"] },
            { category: "Database", items: ["MongoDB", "NoSQL", "mongosh"] },
            { category: "Concepts", items: ["$jsonSchema", "CRUD", "Aggregation", "BSON Backup"] },
            { category: "Tools", items: ["Git", "GitHub"] },
        ],
    },
    "vorance": {
        title: "Vorance",
        shortDescription: "Mobile cycling logbook app built with FlutterFlow and Firebase.",
        description: "Mobile application developed with FlutterFlow as part of the R3.03 course at IUT de Vannes. Vorance is a digital logbook allowing cyclists to record and visualise their rides.",
        overview: "Individual university project driven by my passion for cycling. The app uses Firebase for authentication and data persistence, the Google Maps API for route visualisation, and Custom Functions for automatic average speed calculation (V=D/T). All validation criteria were met during the final acceptance testing.",
        coreFeatures: "Manual ride logging (distance, duration, elevation, feeling). Automatic average speed calculation via Custom Function. Route visualisation on map via city geocoding. Firebase authentication and Firestore persistence. Light/dark mode with global App State management.",
        tags: ["FlutterFlow", "Firebase", "Google Maps"],
        technologies: [
            { category: "No-Code Tool", items: ["FlutterFlow"] },
            { category: "Backend", items: ["Firebase Auth", "Firestore"] },
            { category: "External APIs", items: ["Google Maps", "Geocoding API"] },
            { category: "Logic", items: ["Custom Functions", "App State", "Dart"] },
        ],
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
