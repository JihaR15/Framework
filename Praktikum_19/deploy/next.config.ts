import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,

  images: {
    // domains: [
    //   "lh3.googleusercontent.com",
    //   "avatars.githubusercontent.com",
    //   "assets.adidas.com",
    //   "kasogishoes.com",
    //   "brushme.com",
    // ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.adidas.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "kasogishoes.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "brushme.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
