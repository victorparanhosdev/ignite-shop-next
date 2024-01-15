/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'files.stripe.com',
    ],
    
  },
  async redirects() {
    return [
      {
        source: '/c/pay/',
        destination: '/src/pages/success.tsx',
        permanent: true,
      },
    ];
  },
 
}

module.exports = nextConfig
