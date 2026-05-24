import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Always enable static export for GitHub Pages
  output: "export",
  // Generate folder-based routes (/projects/slug/) for GitHub Pages compatibility
  trailingSlash: true,
  // Avoid slash<->no-slash redirect loops in local/dev with basePath
  skipTrailingSlashRedirect: true,
  // Base path for subfolder deployment
  basePath: "/nolann-portfolio",
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
