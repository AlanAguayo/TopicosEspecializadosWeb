/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {nextConfig,
  env: {
    apiKey: process.env.API_KEY
  },
  //Solo disponible en el servidor
  serverRuntimeConfig: {
    apiKey: process.env.API_KEY
  },
  //Esta disponible tanto en el servidor como en el cliente
  publicRuntimeConfig: {
    apiKey: process.env.API_KEY
  },
}
