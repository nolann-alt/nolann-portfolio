/**
 * SubjectProfile - Carte de profil (colonne gauche)
 * @description Présente les informations clés du profil : statut, école, langues, disponibilité.
 * @component Server (pas d'animations, pas de hooks — rendu côté serveur)
 */
export default function SubjectProfile() {
    return (
        // lg:sticky + lg:top-28 : sur grand écran, la carte reste visible pendant le scroll
        // (sticky = colle en haut de la page quand on scrolle, contrairement à fixed qui sort du flux)
        <aside className="flex flex-col w-full border border-dashed border-ink p-6 md:p-8 h-fit lg:sticky lg:top-28 lg:self-start text-black">
            <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4">
                Subject Profile
            </span>

            {/* Nom */}
            <div className="border-t border-dashed border-ink pt-5 pb-6">
                <h2 className="font-sans font-black text-4xl md:text-5xl uppercase leading-[1.05] tracking-tight">
                    Nolann<br />Lescop
                </h2>
            </div>

            {/* Informations principales */}
            <div className="border-t border-dashed border-ink py-5 space-y-5 text-base">
                <div>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase block mb-1.5">Status</span>
                    <p className="font-medium text-base md:text-lg">B.U.T. Computer Science — Year 2</p>
                </div>
                <div>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase block mb-1.5">School</span>
                    <p className="font-medium text-base md:text-lg">IUT de Vannes</p>
                </div>
                <div className="flex gap-8">
                    <div>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase block mb-1.5">Lang_1</span>
                        <p className="font-medium text-base md:text-lg">FR (Native)</p>
                    </div>
                    <div>
                        <span className="text-xs font-bold tracking-[0.2em] uppercase block mb-1.5">Lang_2</span>
                        <p className="font-medium text-base md:text-lg">EN (Fluent)</p>
                    </div>
                </div>
            </div>

            {/* Badge "Open to Work" */}
            <div className="border-t border-dashed border-ink pt-5">
                <div className="border border-ink p-4">
                    <div className="flex items-center gap-2 mb-2">
                        {/* animate-pulse : classe Tailwind qui fait clignoter l'élément en boucle */}
                        <span className="w-2 h-2 rounded-full bg-ink animate-pulse shrink-0" />
                        <span className="text-xs font-bold tracking-[0.2em] uppercase">
                            Availability
                        </span>
                    </div>
                    <p className="font-black text-base md:text-lg uppercase tracking-wide">Open to Work</p>
                    <p className="text-sm md:text-base mt-1.5 opacity-60">
                        Looking for internship / work-study 2026
                    </p>
                </div>
            </div>
        </aside>
    );
}
