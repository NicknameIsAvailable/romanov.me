/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
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

module.exports = withMDX(nextConfig)
