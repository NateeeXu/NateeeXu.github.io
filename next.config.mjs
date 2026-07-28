/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  poweredByHeader: false,
  compress: true,
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
