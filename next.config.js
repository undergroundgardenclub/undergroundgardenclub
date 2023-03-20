/** @type {import('next').NextConfig} */
const nextConfig = {
  // https://nextjs.org/docs/advanced-features/compiler
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
  // Prefix NEXT_PUBLIC_ exposes envs by default, but we're pulling from secrets manager
  env: {},
  reactStrictMode: true,
  trailingSlash: false,
};

module.exports = nextConfig;
