import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-expect-error ignore custom allowedDevOrigins property
  allowedDevOrigins: ['192.168.1.154', 'http://192.168.1.154:3000'],
};

export default nextConfig;
