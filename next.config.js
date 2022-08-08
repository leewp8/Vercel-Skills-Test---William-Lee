/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async() => {
    return [
      {
        source: '/hello-vercel',
        destination: 'https://vercel.com/',
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
