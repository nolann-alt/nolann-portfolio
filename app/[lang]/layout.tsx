import type { Lang } from "@/lib/i18n";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// generateStaticParams : dit à Next.js quelles valeurs de [lang] existent
// Sans cette fonction, Next.js ne saurait pas quelles URLs générer au build
// Résultat : deux versions statiques du site — /fr/... et /en/...
export function generateStaticParams(): { lang: Lang }[] {
    return [{ lang: "fr" }, { lang: "en" }];
}

// LangLayout — layout partagé par toutes les pages sous /[lang]/
// Il s'intercale entre app/layout.tsx (racine) et les pages individuelles
//
// params est une Promise en Next.js 15+ : les paramètres de route arrivent
// de façon asynchrone, d'où le "async" et le "await params"
// params.lang vaut "fr" ou "en" selon l'URL visitée
//
// lang={lang} sur <main> est un attribut HTML d'accessibilité :
// il indique aux lecteurs d'écran la langue du contenu
export default async function LangLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = (await params) as { lang: Lang };

    return (
        <>
            <Navbar />
            <main lang={lang}>{children}</main>
            <Footer />
        </>
    );
}
