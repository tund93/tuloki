/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    typedRoutes: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  // ignoreBuildErrors: true,
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  compiler: {
    removeConsole: true,
  },
  transpilePackages: ['@tuloki/core'],
};

export default config;
