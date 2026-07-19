import type { Lang } from "@/lib/i18n";

export type Formation = {
    period: string;
    school: string;
    degree: string;
    location: string;
    details?: string[];
};

export type WorkExperience = {
    year: string;
    type: "Academic" | "Internship";
    role: string;
    company: string;
    description: string[];
};

export type SkillGroup = {
    category: string;
    items: string[];
};

// ── FORMATION ────────────────────────────────────────────────────────────────

const formationEn: Formation[] = [
    {
        period: "2024 — 2027",
        school: "IUT de Vannes",
        degree: "B.U.T. Computer Science",
        location: "Vannes, France",
        details: ["Web & backend development", "Programming (Java, Python, C)", "Networks & systems"],
    },
    {
        period: "2021 — 2024",
        school: "Lycée Saint Joseph - La Salle",
        degree: "BAC STI2D — High School Diploma",
        location: "Vannes, France",
        details: ["Specialty SIN — Digital Information Systems"],
    },
];

const formationFr: Formation[] = [
    {
        period: "2024 — 2027",
        school: "IUT de Vannes",
        degree: "B.U.T. Informatique",
        location: "Vannes, France",
        details: ["Développement web & backend", "Programmation (Java, Python, C)", "Réseaux & systèmes"],
    },
    {
        period: "2021 — 2024",
        school: "Lycée Saint Joseph - La Salle",
        degree: "BAC STI2D — Mention Bien",
        location: "Vannes, France",
        details: ["Spécialité SIN — Systèmes d'Information Numériques"],
    },
];

// ── EXPÉRIENCES PROFESSIONNELLES ──────────────────────────────────────────────

const workExperiencesEn: WorkExperience[] = [
    {
        year: "2025 — 2026",
        type: "Academic",
        role: "Fullstack Developer",
        company: "Collège Notre-Dame-La-Blanche, Theix",
        description: [
            "Android mobile app for managing school biathlon sessions",
            "Frontend: Kotlin + XML (Android Views)",
            "Backend: Ktor (HTTP + SSE) for real-time data",
            "SQLite via Room for performance metrics",
        ],
    },
    {
        year: "2025",
        type: "Academic",
        role: "Fullstack Developer",
        company: "Vannes Institute of Technology — SAE S2.01 / S2.02 / S2.03",
        description: [
            "First responder assignment application (Java)",
            "Multi-constraint assignment algorithm",
            "Functional prototype delivered end of semester",
        ],
    },
    {
        year: "2022",
        type: "Internship",
        role: "Intern",
        company: "West Robotic, Muzillac",
        description: [
            "Industrial automata programming",
            "Introduction to professional development environments",
        ],
    },
    {
        year: "2021",
        type: "Internship",
        role: "Intern",
        company: "ETS Gabillet, Plumelec",
        description: [
            "Warehouse operations and stock management",
            "IT tools for equipment diagnostics and maintenance",
        ],
    },
];

const workExperiencesFr: WorkExperience[] = [
    {
        year: "2025 — 2026",
        type: "Academic",
        role: "Développeur Fullstack",
        company: "Collège Notre-Dame-La-Blanche, Theix",
        description: [
            "Application mobile Android de gestion de séances de biathlon scolaire",
            "Frontend : Kotlin + XML (Android Views)",
            "Backend : Ktor (HTTP + SSE) pour données temps réel",
            "Base de données SQLite via Room pour métriques de performance",
        ],
    },
    {
        year: "2025",
        type: "Academic",
        role: "Développeur Fullstack",
        company: "IUT de Vannes — SAE S2.01 / S2.02 / S2.03",
        description: [
            "Application d'affectation de secouristes (Java)",
            "Algorithme d'affectation multi-contraintes",
            "Prototype fonctionnel livré en fin de semestre",
        ],
    },
    {
        year: "2022",
        type: "Internship",
        role: "Stagiaire",
        company: "West Robotic, Muzillac",
        description: [
            "Programmation d'automates industriels",
            "Découverte des environnements de développement professionnels",
        ],
    },
    {
        year: "2021",
        type: "Internship",
        role: "Stagiaire",
        company: "ETS Gabillet, Plumelec",
        description: [
            "Opérations d'entrepôt et gestion des stocks",
            "Outils informatiques pour diagnostics et maintenance",
        ],
    },
];

// ── COMPÉTENCES ───────────────────────────────────────────────────────────────

const skillGroupsEn: SkillGroup[] = [
    { category: "Web & Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "daisyUI", "GSAP", "WordPress"] },
    { category: "Backend & Languages", items: ["Java", "Kotlin", "Python", "PHP", "C", "Node.js / Express"] },
    { category: "Databases", items: ["SQL", "MySQL", "Oracle", "PL/SQL", "SQLite"] },
    { category: "Tools & DevOps", items: ["Git", "GitHub", "VS Code", "Jetbrains IDE", "Linux"] },
];

const skillGroupsFr: SkillGroup[] = [
    { category: "Web & Frontend", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Angular", "Tailwind CSS", "daisyUI", "GSAP", "WordPress"] },
    { category: "Backend & Langages", items: ["Java", "Kotlin", "Python", "PHP", "C", "Node.js / Express"] },
    { category: "Bases de données", items: ["SQL", "MySQL", "Oracle", "PL/SQL", "SQLite"] },
    { category: "Outils & DevOps", items: ["Git", "GitHub", "VS Code", "Jetbrains IDE", "Linux"] },
];

const softSkillsEn = ["Perseverance", "Curiosity", "Autonomy", "Team spirit", "Problem solving"];
const softSkillsFr = ["Persévérance", "Curiosité", "Autonomie", "Esprit d'équipe", "Résolution de problèmes"];

// ── GETTERS BILINGUES ─────────────────────────────────────────────────────────
// Ces fonctions sont appelées par les composants qui reçoivent la langue en prop ou via useLang()

export function getFormation(lang: Lang): Formation[] {
    return lang === "fr" ? formationFr : formationEn;
}

export function getWorkExperiences(lang: Lang): WorkExperience[] {
    return lang === "fr" ? workExperiencesFr : workExperiencesEn;
}

export function getSkillGroups(lang: Lang): SkillGroup[] {
    return lang === "fr" ? skillGroupsFr : skillGroupsEn;
}

export function getSoftSkills(lang: Lang): string[] {
    return lang === "fr" ? softSkillsFr : softSkillsEn;
}

// Exports EN par défaut — conservés pour la compatibilité avec les anciens imports
export const formation = formationEn;
export const workExperiences = workExperiencesEn;
export const skillGroups = skillGroupsEn;
export const softSkills = softSkillsEn;
