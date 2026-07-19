"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Redirige vers /fr par défaut — la page racine "/" n'affiche rien directement
// useRouter().replace() fonctionne avec output: "export" (redirect côté client)
export default function RootPage() {
    const router = useRouter();
    useEffect(() => {
        router.replace("/fr");
    }, [router]);
    return null;
}
