/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'res.cloudinary.com', 'i.dummyjson.com', 'tailwindui.com'],
    },
    experimental: {
        serverActions:true
    }
}

module.exports = nextConfig
