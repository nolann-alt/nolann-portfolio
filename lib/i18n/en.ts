// Dictionnaire anglais — source de vérité pour le type Dictionary
// C'est CE fichier qui définit la structure attendue pour toutes les langues.
// Chaque clé de cet objet doit être présente dans fr.ts, sinon TypeScript signale une erreur.
// Organisation : une section par page (nav, home, about, experiences, shared)
export const en = {
    nav: {
        home: "HOME",
        about: "ABOUT ME",
        experiences: "EXPERIENCES",
        projects: "PROJECTS",
        contact: "Contact",
        menu: "MENU",
        close: "CLOSE",
    },
    home: {
        role: "Computer Science B.U.T. Student.",
        greeting: "Hi there, I'm Nolann LESCOP",
        bio: "I'm a student at the IUT in Vannes in the second year of a computer science degree, and I'm looking for an internship to apply my knowledge and develop my skills in the IT field.",
        cta: "LEARN MORE",
        featuredTitle1: "Featured",
        featuredTitle2: "Projects",
        featuredSubtitle: "A selection of recent projects illustrating my career in the field of computer science",
        moreProjects: "More",
        moreProjectsLabel: "projects",
    },
    about: {
        title1: "About",
        title2: "ME",
        backgroundTitle0: "My",
        backgroundTitle: "Background",
        philosophySubtitle: "Philosophy & Vision",
        philosophyLines: [
            ["The field of computer science is", "constantly evolving, full of,"],
            ["challenges and innovations, and", "shaped by lifelong learning."],
        ] as string[][],
        myStoryCategory: "MY STORY",
        myStoryContent: [
            "My name is Nolann Lescop, a Computer Science student at IUT de Vannes. I'm passionate about web development, backend architecture, and emerging technologies, particularly AI.",
            "I enjoy exploring different areas of computer science out of curiosity, always eager to discover new things and adapt to the technologies shaping tomorrow's careers. This is what drives me to stay up to date with the latest developments and understand how they are transforming our industry.",
            "Outside of coding, you'll find me on my bike or at a climbing gym. Both sports suit me well: cycling teaches me discipline and pushing through limits, while climbing constantly challenges me physically, but also mentally, as every boulder problem is a puzzle to solve with no given solution.",
            "My goal is to land an internship where I can apply my academic knowledge to real-world projects, keep growing, and move closer to finding the career that truly fits me.",
        ],
        certificationsCategory: "EDUCATION",
        certificationsHeaders: ["DEGREE", "INSTITUTION"],
        certificationsItems: [
            { subject: "B.U.T. Computer Science — In progress", source: "Vannes Institute of Technology · 2024 - 2027" },
            { subject: "BAC STI2D — High School Diploma", source: "Lycée Saint Joseph - La Salle · 2021 - 2024" },
        ],

        recognitionsCategory: "HIGHLIGHTS",
        recognitionsItems: [
            { 
                title: "BIATHLON PROJECT – DUAL", 
                subtitle: "Delivered for a real client · Collège Notre-Dame-La-Blanche", 
                date: "2026" 
            },
            { 
                title: "RESCUE WORKER PROJECT", 
                subtitle: "Assignment app · Multi-constraint algorithm", 
                date: "2025" 
            },
            { 
                title: "PERSONAL PORTFOLIO", 
                subtitle: "Next.js 16 · GSAP · Custom design · Live online", 
                date: "2026" 
            },
        ],
    },
    experiences: {
        heroScriptWord: "My",
        heroSansWord: "Experiences",
        heroSubtitle: "Education, work experiences & skills",
        profileLabel: "Subject Profile",
        profileStatusLabel: "Status",
        profileStatusValue: "B.U.T. Computer Science — Year 2",
        profileSchoolLabel: "School",
        profileSchoolValue: "IUT de Vannes",
        profileLang1Label: "Lang_1",
        profileLang1Value: "FR (Native)",
        profileLang2Label: "Lang_2",
        profileLang2Value: "EN (B2)",
        profileAvailabilityLabel: "Availability",
        profileAvailabilityValue: "Open to Work",
        profileAvailabilityDetail: "Looking for internship 2026",
        profileCvLabel: "Download my CV",
        educationLabel: "Education",
        experienceLabel: "Experience",
        skillsTitle: "Equipment Inventory",
    },
    projects: {
        allTitle1: "All",
        allTitle2: "Projects",
        subtitle: "A complete overview of my projects, showcasing my skills and experiences in computer science",
        heroBack: "Back",
        heroHome: "Home",
        heroNext: "Next",
        heroYear: "Year",
        aboutTitle1: "ABOUT",
        aboutTitle2: "The Project",
        aboutOverview: "Overview",
        aboutCoreFeatures: "Core Features",
        aboutTechnologies: "Technologies",
        aboutLinks: "Links",
        aboutDemo: "Demo",
        navNext: "Next Project",
        navPrevious: "Previous Project",
        navEnd: "End of projects",
        screenshotsTitle: "Screenshots",
        screenshotsSubtitle: "A visual overview of the project's interface and features",
    },
    shared: {
        pageEndTitle: "Let's work together!",
        pageEndCta: "CONTACT ME",
        textParagraphSubtitle: "Thank you for your visit",
        textParagraphLines: [
            ["Your time means a lot,", "and I hope you enjoyed", "discovering this portfolio."],
        ] as string[][],
    },
};

// Le type Dictionary est déduit automatiquement depuis l'objet "en"
// Cela garantit que le dictionnaire français a exactement la même structure
export type Dictionary = typeof en;
