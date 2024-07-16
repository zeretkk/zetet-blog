/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  images:{
    remotePatterns:[
      {
        hostname: 'zeret-p-images.storage.yandexcloud.net'
      }
    ]
  }
};

export default nextConfig;
