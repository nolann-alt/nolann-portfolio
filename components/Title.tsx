interface TitleProps {
    title: string
}

/**
 * Title - Titre de section réutilisable
 * @description Uniformise le style des titres dans les sections statiques.
 * @component Server
 */
const Title = ({ title }: TitleProps) => {
    return (
        // Composant volontairement minimal pour garantir une cohérence typographique entre sections.
        <h1 className="uppercase font-bold mb-5 text-center text-4xl text-[#1f1d1f]">
            {title}
        </h1>
    );
};

export default Title;