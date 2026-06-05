import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/components/shared/LoadingScreen";

// metadataBase : URL de base du site déployé.
// Next.js l'utilise pour résoudre les chemins relatifs (ex: images Open Graph)
export const metadata: Metadata = {
    metadataBase: new URL("https://nolann-alt.github.io/nolann-portfolio"),
    // template : "%s" sera remplacé par le titre de chaque page
    title: {
        default: "Nolann Lescop — Portfolio",
        template: "%s | Nolann Lescop",
    },
    authors: [{ name: "Nolann Lescop" }],
    creator: "Nolann Lescop",
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
