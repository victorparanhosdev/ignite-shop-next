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
        source: '/c/pay/:path*',
        destination: 'https://ignite-shop-next-theta.vercel.app/success/:path*',
        permanent: true,
      },
    ];
  },
 
}

module.exports = nextConfig
