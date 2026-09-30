/** @type {import('next').NextConfig} */
const nextConfig = {
  // NOTE: output must stay as the default server mode.
  // The site is meant to run as a service on a Linux server:
  //   npm run build && npm start
  // Do NOT set `output: 'export'`.
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  serverExternalPackages: ['nodemailer'],
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
