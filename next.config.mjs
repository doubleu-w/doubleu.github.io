/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel runs Next.js natively (no "output: 'export'")
  images: { unoptimized: true } // keep if you don't use a loader yet
};
export default nextConfig;
