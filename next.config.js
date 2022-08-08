/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig, {
  async redirects() {
    return [
      {
        source: '/hello-vercel',
        destination: 'https://vercel.com/',
        permanent: false,
      },
    ]
  },
}
