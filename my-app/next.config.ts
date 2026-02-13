/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
     formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: '/**',
      },
    ],
     qualities: [75, 85], 
  },
}

export default nextConfig