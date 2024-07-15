/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        hostname: 'zeret-p-images.storage.yandexcloud.net'
      }
    ]
  }
};

export default nextConfig;
