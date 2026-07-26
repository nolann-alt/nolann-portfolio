import type { Metadata } from "next";
import type { Lang } from "@/lib/i18n";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const BASE_URL = "https://nolann-alt.github.io/nolann-portfolio";

// generateStaticParams : dit à Next.js quelles valeurs de [lang] existent
// Sans cette fonction, Next.js ne saurait pas quelles URLs générer au build
// Résultat : deux versions statiques du site — /fr/... et /en/...
export function generateStaticParams(): { lang: Lang }[] {
    return [{ lang: "fr" }, { lang: "en" }];
}

// generateMetadata : génère les balises SEO dynamiquement selon la langue.
// Ces métadonnées s'appliquent à toutes les pages sous /[lang]/ par défaut —
// chaque page peut ensuite les surcharger avec son propre generateMetadata.
export async function generateMetadata({ params }: { params: Promise<{ lang: Lang }> }): Promise<Metadata> {
    const { lang } = await params;
    const isFr = lang === "fr";

    const title = isFr ? "Nolann Lescop — Portfolio" : "Nolann Lescop — Portfolio";
    const description = isFr
        ? "Portfolio de Nolann Lescop, étudiant en BUT Informatique. Projets web, SAÉ et expériences."
        : "Portfolio of Nolann Lescop, Computer Science student. Web projects, academic work and experiences.";

    return {
        title,
        description,
        // alternates : balises hreflang — indique à Google qu'il existe
        // une version FR et une version EN du même contenu
        alternates: {
            canonical: `${BASE_URL}/${lang}/`,
            languages: {
                "fr": `${BASE_URL}/fr/`,
                "en": `${BASE_URL}/en/`,
            },
        },
        // openGraph : contrôle l'aperçu affiché sur LinkedIn, Discord, etc.
        openGraph: {
            type: "website",
            locale: isFr ? "fr_FR" : "en_US",
            alternateLocale: isFr ? "en_US" : "fr_FR",
            url: `${BASE_URL}/${lang}/`,
            siteName: "Nolann Lescop — Portfolio",
            title,
            description,
        },
    };
}

// JSON-LD : données structurées pour Google (schema.org).
// Permet à Google de comprendre que ce site est le portfolio d'une personne réelle —
// améliore les chances d'apparaître dans les résultats enrichis (Knowledge Panel, etc.)
function JsonLd({ lang }: { lang: Lang }) {
    const isFr = lang === "fr";
    const structured = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Nolann Lescop",
        url: `${BASE_URL}/${lang}/`,
        jobTitle: isFr ? "Étudiant en BUT Informatique" : "Computer Science Student",
        email: "nolann.lescop@outlook.com",
        sameAs: [
            "https://github.com/nolann-alt",
            "https://www.linkedin.com/in/nolann-lescop-00427233a/",
            "https://www.youtube.com/@NolannLESCOP",
        ],
    };

    // dangerouslySetInnerHTML est nécessaire ici pour injecter du JSON brut dans une balise <script>
    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />;
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
            <JsonLd lang={lang} />
            <Navbar />
            <main lang={lang}>{children}</main>
            <Footer />
        </>
    );
}
