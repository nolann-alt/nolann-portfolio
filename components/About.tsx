import Title from "@/components/Title";
import { Bike, Code, Flame, GraduationCap } from "lucide-react";

const BASE_PATH = "/my-portfolio-next.js";

const aboutSections = [
    {
        id: 1,
        title: "Student",
        description: "Computer Science student at IUT of Vannes, passionate about web and backend development and new technologies.",
        icon: <GraduationCap className="text-[#1e1f1f] scale-150" />
    },
    {
        id: 2,
        title: "In Search of Passion",
        description: "I'm exploring different fields in IT to discover what I'm most passionate about.",
        icon: <Flame className="text-[#1e1f1f] scale-150" />
    },
    {
        id: 3,
        title: "Looking for an Internship",
        description: "I'm currently looking for an internship to apply my skills in web and backend development and gain hands-on experience in a professional environment.",
        icon: <Code className="text-[#1e1f1f] scale-150" />
    },
    {
        id: 4,
        title: "Outside the Screen",
        description: "When I'm not coding, you'll probably find me on my bike.",
        icon: <Bike className="text-[#1e1f1f] scale-150" />
    }
];

/**
 * About - Section de présentation rapide
 * @description Affiche les points clés du profil avec icônes et mise en page en cartes.
 * @component Server
 */
const About: React.FC = () => {
    return (
        <section id="about" className="relative">
            <div className="p-10 mb-10 md:mb-32">
                <div className="md:h-screen flex justify-center items-center">
                    <div className="flex flex-col">
                        <Title title="About Me" />
                        <div className="flex justify-center items-center md:mt-20">
                            <div className="hidden md:block">
                                <img src={`${BASE_PATH}/profil.jpg`} alt="profil" className="w-96 h-96 object-cover rounded-xl" />
                            </div>
                            {/* Mapping des informations pour garder un rendu homogène et facilement maintenable */}
                            <div className="md:ml-4 space-y-4">
                                {aboutSections.map((section) => (
                                    <div key={section.id} className="flex flex-col md:flex-row items-center p-5 rounded-xl shadow-xl border-[#1e1f1f] border">
                                        <div className="mb-2 md:mb-0">
                                            {section.icon}
                                        </div>
                                        <div className="md:ml-4 text-center md:text-left">
                                            <h2 className="text-xl font-bold mb-1">{section.title}</h2>
                                            <p className="text-small">{section.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;