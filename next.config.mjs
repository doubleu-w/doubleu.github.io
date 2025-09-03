/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // produce static files in /out
  images: { unoptimized: true },
  trailingSlash: true
};
export default nextConfig;
