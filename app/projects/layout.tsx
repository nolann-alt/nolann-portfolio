/**
 * Layout des pages projets
 * @description Enveloppe commune pour les pages de projets (min-height)
 * @layout
 */

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
    // Garde une hauteur minimale écran pour éviter les pages "courtes" visuellement cassées.
    return <div className="min-h-screen">{children}</div>;
}