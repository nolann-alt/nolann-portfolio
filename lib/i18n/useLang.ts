"use client";

import { usePathname } from "next/navigation";
import type { Lang } from "./index";

// useLang — hook React réservé aux Client Components ("use client")
// Les Server Components reçoivent la langue via params.lang (voir app/[lang]/layout.tsx)
// Les Client Components ne peuvent pas lire params, donc ils lisent l'URL à la place
//
// Fonctionnement :
//   usePathname() → renvoie l'URL courante, ex: "/fr/about"
//   .split("/")   → ["", "fr", "about"]
//   [1]           → "fr"
//
// Si le segment vaut "fr" → on est en français, sinon → anglais par défaut
export function useLang(): Lang {
    const pathname = usePathname();
    return pathname.split("/")[1] === "fr" ? "fr" : "en";
}
