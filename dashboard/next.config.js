/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions:true
    },
    images: {
        domains: ['files.edgestore.dev']
    }
}

module.exports = nextConfig
