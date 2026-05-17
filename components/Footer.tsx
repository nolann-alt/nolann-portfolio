import { Github, Linkedin, Youtube } from "lucide-react";

/**
 * Footer - Pied de page global
 * @description Affiche l'identité du portfolio et les liens vers les réseaux professionnels.
 * @component Server
 */
const Footer = () => {
    return (
        <footer className="relative w-full border-t-2 border-[#1f1d1f] px-5 py-8 md:px-[3%]">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
                {/* Zone identité: renforce la signature visuelle du portfolio */}
                <aside className="text-center md:text-left">
                    <p className="font-bold">
                        <a href="#" className="font-bold text-2xl text-[#1f1d1f]">
                            Nolann&apos;s <span className="text-[#1e1f1f]">Portfolio</span>
                        </a>
                    </p>
                    <p className="text-sm md:text-base">Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                {/* Zone sociale: accès direct aux plateformes pro/personnelles */}
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.youtube.com/@NolannLESCOP" target="_blank" rel="noopener noreferrer">
                            <Youtube className="w-6 h-6 text-current" />
                        </a>
                        <a href="https://github.com/nolann-alt" target="_blank" rel="noopener noreferrer">
                            <Github className="w-6 h-6 text-current" />
                        </a>
                        <a href="https://www.linkedin.com/in/nolann-lescop-00427233a/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-6 h-6 text-current" />
                        </a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;