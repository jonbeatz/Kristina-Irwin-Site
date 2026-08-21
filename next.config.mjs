/** @type {import('next').NextConfig} */
// KI_STATIC=1 → static export to out/ for SiteGround public_html.
const isStatic = process.env.KI_STATIC === '1'

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['motion', 'three', '@react-three/fiber', '@react-three/drei'],
  images: { unoptimized: true },
  ...(isStatic
    ? {
        output: 'export',
      }
    : {}),
}

export default nextConfig
