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
        source: 'https://ignite-shop-next-theta.vercel.app/success/:slug*',  // Adicione :slug* para capturar a parte dinâmica da URL
        destination: 'https://checkout.stripe.com/c/pay/:slug*',  // O domínio base do seu projeto
        permanent: true,
      },
    ];
  },
 
}

module.exports = nextConfig
