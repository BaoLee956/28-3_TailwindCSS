/**
 * Next.js configuration file (ES Modules)
 * Enables experimental Server Actions feature required by `"use server"` actions
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Enable Server Actions so files using "use server" are accepted
    serverActions: true,
  },
};

export default nextConfig;
