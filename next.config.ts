import type { NextConfig } from "next";
// @ts-ignore
import withPWA from "next-pwa";

const nextConfig: NextConfig = {
  turbopack: {},
};

const withPWAConfig = withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
});

export default withPWAConfig(nextConfig);
