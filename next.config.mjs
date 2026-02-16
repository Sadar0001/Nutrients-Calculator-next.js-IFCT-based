/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "readymadeui.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
