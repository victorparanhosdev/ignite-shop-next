/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'files.stripe.com',
    ],
    
  },

// next.config.js

async redirects() {
    return [
      {
        source: '/success/:slug*',  // Adicione :slug* para capturar a parte dinâmica da URL
        destination: 'https://ignite-shop-next-theta.vercel.app/success/:slug*',
        permanent: true,
      },
    ];
  },
 
}

module.exports = nextConfig
