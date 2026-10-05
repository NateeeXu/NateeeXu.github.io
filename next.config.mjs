/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages serves static files only.
  output: "export",
  // Emit /zh/index.html so /zh/ resolves on GitHub Pages.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
