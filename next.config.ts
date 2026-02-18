import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**', // All local images
      },
      {
        protocol: 'https',
<<<<<<< HEAD
        hostname: 'pvco-molecor-backend.onrender.com',
        pathname: '/**',
=======
        hostname: 'molecor-backend-pvco.onrender.com',
        port: '',
        pathname: '/**', // All backend images (news, case_studies, certificates, etc.)
>>>>>>> 47ae96a87fb8a2d118896bf2ec1310a4cd31b3f4
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
<<<<<<< HEAD
        pathname: '/**',
=======
        pathname: '/**', // All Cloudinary images
>>>>>>> 47ae96a87fb8a2d118896bf2ec1310a4cd31b3f4
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**', // Only if you use this host
      },
    ],
  },
};

export default nextConfig;