import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "5sywtsngamnhnz2b.public.blob.vercel-storage.com",
        port: "", // Tambahkan ini biar aman
        pathname: "/**", // WAJIB ADA supaya semua file diizinkan
      },
    ],
  },
};

export default nextConfig;
