import { en } from "./en";
import { fr } from "./fr";

// On ré-exporte le type Dictionary depuis en.ts pour que le reste du code
// puisse l'importer depuis "@/lib/i18n" sans connaître la structure interne
export type { Dictionary } from "./en";

// Lang : "union type" = une valeur qui ne peut être que "fr" ou "en"
// TypeScript refusera de compiler si on passe autre chose (ex: "es" → erreur)
export type Lang = "fr" | "en";

// getDictionary : point d'entrée principal — retourne l'objet textes de la bonne langue
// Utilisé partout dans l'app via : const t = getDictionary(lang)
// Exemple : t.nav.home → "HOME" (en) ou "ACCUEIL" (fr)
export function getDictionary(lang: Lang) {
    return lang === "fr" ? fr : en;
}
