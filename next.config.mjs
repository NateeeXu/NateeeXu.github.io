/** @type {import('next').NextConfig} */
const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig = {
  ...(isGitHubPagesBuild ? { output: "export" } : {}),
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
