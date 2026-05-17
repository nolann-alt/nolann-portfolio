import Title from "@/components/Title";

const skills = [
    { id: 1, name: "HTML", image: "/techno/html.svg" },
    { id: 2, name: "CSS", image: "/techno/css.svg" },
    { id: 3, name: "JavaScript", image: "/techno/js.svg" },
    { id: 4, name: "Typescript", image: "/techno/ts.svg" },
    { id: 5, name: "React", image: "/techno/react.svg" },
    { id: 6, name: "Vue.js", image: "/techno/vue.svg" },
    { id: 7, name: "Express.js", image: "/techno/express.svg" },
    { id: 8, name: "Tailwind CSS", image: "/techno/tailwind.png" },
    { id: 9, name: "Bootstrap", image: "/techno/bootstrap.svg" },
    { id: 10, name: "GSAP", image: "/techno/gsap.png" },
    { id: 11, name: "WordPress", image: "/techno/wordpress.png" },
    { id: 12, name: "Python", image: "/techno/python.svg" },
    { id: 13, name: "Java", image: "/techno/java.svg" },
    { id: 14, name: "SQL", image: "/techno/sql.svg" },
    { id: 15, name: "PHP", image: "/techno/php.svg" },
    { id: 16, name: "C", image: "/techno/c.svg" },
    { id: 17, name: "MySQL", image: "/techno/mysql.svg" },
    { id: 18, name: "Oracle", image: "/techno/oracle.svg" },
    { id: 19, name: "Linux", image: "/techno/linux.svg" },
    { id: 20, name: "Ubuntu", image: "/techno/ubuntu.png" },
    { id: 21, name: "Windows", image: "/techno/windows.svg" },
    { id: 22, name: "EndeavourOS", image: "/techno/endeavouros.png" },
    { id: 23, name: "Debian", image: "/techno/debian.svg" },
    { id: 24, name: "Github", image: "/techno/github.svg" },
    { id: 25, name: "Git", image: "/techno/git.svg" },
    { id: 26, name: "VsCode", image: "/techno/vscode.svg" },
    { id: 27, name: "Intelij IDEA", image: "/techno/intelij.svg" },
    { id: 28, name: "DataGrip", image: "/techno/datagrip.svg" },
    { id: 29, name: "PyCharm", image: "/techno/pycharm.svg" },
    { id: 30, name: "WebStorm", image: "/techno/webstorm.svg" },
    { id: 31, name: "Eclipse", image: "/techno/eclipse.svg" },
];

const experiences = [
    { id: 1, type: "University", role: "Fullstack Developer", company: "Collège Notre Dame La Blanche, Theix", period: "Sept 2025 - April 2026", description: ["Developing a biathlon training assistance application for the college", "Frontend built with Kotlin + Jetpack Compose", "Backend using Ktor (HTTP + SSE) for real-time data", "SQLite database to manage training data and performance metrics", "Collaborating with teachers and students to gather requirements and design features"], image: "/experiences/college.jpg" },
    { id: 2, type: "University", role: "Project Manager", company: "IUT of Vannes", period: "Jan 2025 - Jun 2025", description: ["SAE S2.01 / S2.02 / S2.03", "Collaborated with my teammates to create a functional prototype application", "Implemented core features using Java", "Designed the application to assign first responders efficiently for different missions"], image: "/experiences/ambulympics.png" },
    { id: 3, type: "University", role: "Developper", company: "IUT of Vannes", period: "Nov 2024 - Jan 2025", description: ["SAE S1.05 / 1.06", "Created a WordPress website (La Ciotat) for a small city as part of a university project", "Customized the website design to be user-friendly and visually appealing", "Implemented pages, menus, shop, and content management features to simulate a real municipal website"], image: "/experiences/laciotat.png" },
    { id: 4, type: "Internship", role: "Intern", company: "West Robotic", period: "2022", description: ["Gained hands-on experience programming industrial automata", "Learned the time and planning required for automation programming", "Discovered how to work in a professional development environment"], image: "/experiences/westrobotic.png" },
    { id: 5, type: "Internship", role: "Intern", company: "ETS Gabillet", period: "2021", description: ["Gained insight into warehouse operations and stock management", "Learned about the day-to-day role of a warehouse operator", "Used IT tools for equipment diagnostics and maintenance"], image: "/experiences/ets-gabillet.png" }
];

/**
 * Experiences - Section expériences et stack technique
 * @description Présente les expériences académiques/professionnelles et les technologies pratiquées.
 * @component Server
 */
const Experiences: React.FC = () => {
    return (
        <section id="experiences" className="relative mb-10 md:mb-32">
            <Title title="Experiences" />
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-[#1e1f1f]">
                                <img src={skill.image} alt={skill.name} className="object-cover rounded-full h-full w-full" />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>
                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((experience) => (
                        <div key={experience.id} className="flex flex-col shadow-lg border-[#1e1f1f] rounded-xl border p-4">
                            <div className="flex items-center">
                                <img src={experience.image} alt={experience.company} className="object-cover h-10 w-10" />
                                <div className="ml-4">
                                    <h1 className="text-xl text-[#1e1f1f] font-bold">{experience.type}</h1>
                                    <h1 className="text-xl font-bold">{experience.role}, {experience.company}</h1>
                                    <span className="text-small">{experience.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {experience.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;