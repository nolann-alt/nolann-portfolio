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

export const formation: Formation[] = [
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
        degree: "BAC STI2D — High Honors",
        location: "Vannes, France",
        details: ["Specialty SIN — Digital Information Systems"],
    },
];

export const workExperiences: WorkExperience[] = [
    {
        year: "2025 — 2026",
        type: "Academic",
        role: "Fullstack Developer",
        company: "Collège Notre Dame La Blanche, Theix",
        description: [
            "Biathlon training assistance application",
            "Frontend: Kotlin + Jetpack Compose",
            "Backend: Ktor (HTTP + SSE) for real-time data",
            "SQLite database for performance metrics",
        ],
    },
    {
        year: "2025",
        type: "Academic",
        role: "Project Manager",
        company: "IUT de Vannes — SAE S2.01 / S2.02 / S2.03",
        description: [
            "First responder assignment application (Java)",
            "Team coordination and sprint planning",
            "Functional prototype delivered end of semester",
        ],
    },
    {
        year: "2024 — 2025",
        type: "Academic",
        role: "Web Developer",
        company: "IUT de Vannes — SAE S1.05 / S1.06",
        description: [
            "WordPress website for a fictional city (La Ciotat)",
            "Responsive design, content management, e-commerce",
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

export const skillGroups: SkillGroup[] = [
    {
        category: "Web & Frontend",
        items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "GSAP", "WordPress"],
    },
    {
        category: "Backend & Languages",
        items: ["Java", "Python", "PHP", "C", "Node.js / Express"],
    },
    {
        category: "Databases",
        items: ["SQL", "MySQL", "Oracle"],
    },
    {
        category: "Tools & DevOps",
        items: ["Git", "GitHub", "VS Code", "IntelliJ IDEA", "Linux"],
    },
];

export const softSkills = [
    "Perseverance",
    "Curiosity",
    "Autonomy",
    "Team spirit",
    "Problem solving",
];
