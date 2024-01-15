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
        source: '/',
        destination: '/success',
        permanent: true,
      },
    ];
  },
 
}

module.exports = nextConfig
