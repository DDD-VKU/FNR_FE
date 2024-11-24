/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'], // Thêm tên miền của Cloudinary
  },
};

export default nextConfig;
