import "./globals.css";
import LoadingScreen from "@/components/shared/LoadingScreen";

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
