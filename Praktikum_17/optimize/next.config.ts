import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  reactStrictMode: true,

  images: {
    domains: [
      "lh3.googleusercontent.com",
      "avatars.githubusercontent.com",
      "assets.adidas.com",
      "kasogishoes.com",
      "brushme.com",
    ],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "assets.adidas.com",
    //     port: "",
    //     pathname: "/**",
    //   },
    // ],
  },
};

export default nextConfig;
