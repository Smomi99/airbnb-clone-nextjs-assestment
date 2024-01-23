/** @type {import('next').NextConfig} */
const nextConfig = {
  
    images: {
        domains: ['links.papareact.com'],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      }
};

export default nextConfig;
