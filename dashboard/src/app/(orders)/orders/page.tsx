import { DataTable } from "./data-table"
import prisma from '@/lib/prismadb';

const getOrders = async () => {
  const orders = await prisma.orderItems.findMany({
    include: {
      product: {
        select: {
          name: true,
          price: true,
        },
      },
      order: {
        select: {
          user: {
            select: {
              name: true,
              email: true,
              username: true,
            },
          }
        }
      },
    }
  });
  return orders;
}

export default async function customers() {
  const orders = await getOrders()

  console.log(orders)

  return (
    <div className="container py-10 mx-auto">
      <DataTable data={orders} />
    </div>
  )
}
