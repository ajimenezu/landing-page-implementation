import type { NextConfig } from "next";

const IMG_HOST = process.env.IMAGES_HOST || ''

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: IMG_HOST,
      port: '',
      pathname: process.env.IMAGES_PATH
    }]
  }
};

export default nextConfig;
