export { default } from 'next-auth/middleware'

export const config = {
    matcher: ['/success'],
    api: {
        bodyParser: false,
    },
}