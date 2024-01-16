/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'files.stripe.com',
    ],
    
  },

async rewrites() {
    return [
      {
        source: '/success',  // A URL da sua página interna
        destination: 'https://ignite-shop-next-theta.vercel.app/success'  // A URL de retorno configurada no Stripe
      },
    ];
  },
 
}

module.exports = nextConfig
