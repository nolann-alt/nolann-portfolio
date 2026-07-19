import type { NextConfig } from "next";

// basePath uniquement en production (GitHub Pages) — en dev, l'app est à la racine "/"
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // output: "export" uniquement en prod — en dev, Turbopack ne gère pas cette contrainte
  output: isProd ? "export" : undefined,
  // Generate folder-based routes (/projects/slug/) for GitHub Pages compatibility
  trailingSlash: true,
  // Avoid slash<->no-slash redirect loops in local/dev with basePath
  skipTrailingSlashRedirect: true,
  // Base path for subfolder deployment (GitHub Pages)
  basePath: isProd ? "/nolann-portfolio" : "",
  images: {
    // Disable image optimization for static export
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
