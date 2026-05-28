// En production (GitHub Pages), les assets sont dans /nolann-portfolio/public/
// En dev, ils sont à la racine — pas besoin de préfixe
export const BASE_PATH = process.env.NODE_ENV === "production" ? "/nolann-portfolio" : "";
