/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
          },
          {
            protocol: 'https',
            hostname: 'gv9nkbrfzsueg0x5.public.blob.vercel-storage.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
