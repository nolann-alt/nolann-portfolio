import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/components/shared/LoadingScreen";

// metadataBase : URL de base du site déployé.
// Next.js l'utilise pour résoudre les chemins relatifs (ex: images Open Graph)
export const metadata: Metadata = {
    metadataBase: new URL("https://nolann-alt.github.io/nolann-portfolio"),
    title: {
        default: "Nolann Lescop | Développeur & Portfolio",
        template: "%s | Nolann Lescop",
    },
    description: "Portfolio officiel de Nolann Lescop, développeur. Découvrez mes projets, compétences et réalisations.",
    icons: {
        icon: "/icon.png",
        apple: "/icon.png",
    },
    authors: [{ name: "Nolann Lescop" }],
    creator: "Nolann Lescop",
    keywords: ["Nolann Lescop", "Nolann Lescop portfolio", "Développeur Web", "Next.js", "React"],
    verification: {
        google: "WoaxZPHsFQKvMHOOD36zrxRW_MdPI1TNwNC0aBWphXw",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fr">
            <body className="relative min-h-screen bg-cream text-ink antialiased">
                {/* Écran de chargement : se superpose au contenu, glisse vers le haut une fois prêt */}
                <LoadingScreen />
                {children}
            </body>
        </html>
    );
}
