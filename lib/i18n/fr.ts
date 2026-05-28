import type { Dictionary } from "./en";

// Dictionnaire français — doit respecter exactement la même structure que en.ts
// Le type Dictionary (importé depuis en.ts) garantit au compilateur que :
//   - aucune clé n'est manquante (sinon erreur rouge dans l'éditeur)
//   - aucune clé supplémentaire ne peut être ajoutée par erreur
// Pour ajouter un nouveau texte : l'ajouter dans en.ts EN PREMIER,
// TypeScript signalera alors l'erreur dans ce fichier jusqu'à ce qu'il soit traduit.
export const fr: Dictionary = {
    nav: {
        home: "ACCUEIL",
        about: "À PROPOS",
        experiences: "EXPÉRIENCES",
        projects: "PROJETS",
        contact: "Contact",
        menu: "MENU",
        close: "FERMER",
    },
    home: {
        role: "Étudiant en B.U.T. Informatique.",
        greeting: "Bonjour, je suis Nolann LESCOP",
        bio: "Je suis étudiant à l'IUT de Vannes en deuxième année de BUT Informatique, et je recherche un stage pour mettre en pratique mes connaissances et développer mes compétences dans le domaine de l'Informatique.",
        cta: "EN SAVOIR PLUS",
        featuredTitle1: "Réalisations",
        featuredTitle2: "Récentes",
        featuredSubtitle: "Une sélection de projets récents illustrant mon parcours dans le domaine de l'informatique",
        moreProjects: "Plus de",
        moreProjectsLabel: "réalisations",
    },
    about: {
        title1: "Mon",
        title2: "PARCOURS",
        backgroundTitle0: "Mon",
        backgroundTitle: "Parcours",
        philosophySubtitle: "Philosophie & Vision",
        philosophyLines: [
            ["L'informatique est un domaine", "en constante évolution, riche en,"],
            ["défis et innovations, façonné", "par l'apprentissage continu."],
        ],
        myStoryCategory: "MON HISTOIRE",
        myStoryContent: [
            "Je m'appelle Nolann Lescop, étudiant en Informatique à l'IUT de Vannes. Je suis passionné par le développement web, l'architecture backend et les nouvelles technologies, en particulier l'IA.",
            "J'aime explorer différents domaines de l'informatique par curiosité, avec l'envie de découvrir de nouvelles choses et de m'adapter aux métiers de demain. C'est ce qui me pousse à m'intéresser aux évolutions technologiques et à comprendre comment elles façonnent notre futur.",
            "En dehors du code, vous me trouverez sur mon vélo ou dans une salle d'escalade. Ces deux sports me correspondent bien : le vélo m'apprend la discipline et le dépassement de soi, tandis que l'escalade me confronte à de véritables défis - physiques, mais aussi intellectuels, car chaque bloc est un problème à résoudre sans solution toute faite.",
            "Mon objectif est de décrocher un stage où je pourrai mettre en pratique mes connaissances sur des projets concrets, continuer à apprendre et avancer vers le métier qui me correspond vraiment.",
        ],
        certificationsCategory: "FORMATION",
        certificationsHeaders: ["DIPLÔME", "ÉTABLISSEMENT"],
        certificationsItems: [
            { subject: "B.U.T. Informatique — En cours", source: "IUT de Vannes · 2024 - 2027" },
            { subject: "BAC STI2D — Mention Bien", source: "Lycée Saint Joseph - La Salle · 2021 - 2024" },
        ],

        recognitionsCategory: "DISTINCTIONS",
        recognitionsItems: [
            { 
                title: "SAE BIATHLON – DUAL", 
                subtitle: "Livraison pour un client réel · Collège Notre-Dame-La-Blanche", 
                date: "2026" 
            },
            { 
                title: "SAE SECOURISTE", 
                subtitle: "App d'affectation · Algorithme multi-contraintes", 
                date: "2025" 
            },
            { 
                title: "PORTFOLIO PERSONNEL", 
                subtitle: "Next.js 16 · GSAP · Design custom · En ligne", 
                date: "2026" 
            },
        ],
    },
    experiences: {
        heroScriptWord: "My",
        heroSansWord: "Expériences",
        heroSubtitle: "Formation, expériences & compétences",
        profileLabel: "Profil",
        profileStatusLabel: "Statut",
        profileStatusValue: "B.U.T. Informatique — Année 2",
        profileSchoolLabel: "École",
        profileSchoolValue: "IUT de Vannes",
        profileLang1Label: "Langue_1",
        profileLang1Value: "FR (Natif)",
        profileLang2Label: "Langue_2",
        profileLang2Value: "EN (B2)",
        profileAvailabilityLabel: "Disponibilité",
        profileAvailabilityValue: "Ouvert aux opportunités",
        profileAvailabilityDetail: "Recherche stage / alternance 2026",
        educationLabel: "Formation",
        experienceLabel: "Expériences",
        skillsTitle: "Compétences",
    },
    projects: {
        allTitle1: "Les",
        allTitle2: "PROJETS",
        heroBack: "Précédent",
        heroHome: "Accueil",
        heroNext: "Suivant",
        heroYear: "Année",
        aboutTitle1: "Le",
        aboutTitle2: "Projet",
        aboutOverview: "Aperçu",
        aboutCoreFeatures: "Fonctionnalités",
        aboutTechnologies: "Technologies",
        aboutLinks: "Liens",
        aboutDemo: "Démo",
        navNext: "Projet Suivant",
        navPrevious: "Projet Précédent",
        navEnd: "Fin des projets",
        screenshotsTitle: "Découvrir",
        screenshotsSubtitle: "Aperçu visuel de l'interface et des fonctionnalités du projet",
    },
    shared: {
        pageEndTitle: "Travaillons ensemble !",
        pageEndCta: "ME CONTACTER",
        textParagraphSubtitle: "Merci de votre visite",
        textParagraphLines: [
            ["Votre temps compte beaucoup,", "j'espère que vous avez apprécié", "découvrir ce portfolio."],
        ],
    },
};
