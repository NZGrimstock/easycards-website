/** @type {import('next').NextConfig} */
const nextConfig = {
  // logo.png is ~470KB raw; let Vercel serve resized AVIF/WebP instead of the original.
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
