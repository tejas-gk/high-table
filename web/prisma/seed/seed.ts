import prisma from '@/lib/prismadb'

async function main() {
  await prisma.user.upsert({
    data: {
      email: 'johndoe@email.com',
      name: 'John Doe',
    },
  })
}