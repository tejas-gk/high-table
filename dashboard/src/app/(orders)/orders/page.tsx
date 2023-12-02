import { columns } from "./components/columns";
import { DataTable } from "./components/data-table"
import prisma from '@/lib/prismadb';

const getOrders = async () => {
  const orders = await prisma.order.findMany({
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
      OrderItems: {
        include: {
          product: true,
        },
      },
    },
  })
  return orders;
}

export default async function customers() {
  const orders = await getOrders()
  console.log(orders)
  return (
    <div className="container py-10 mx-auto">
      {/* @ts-ignore */}
      <DataTable data={orders} columns={columns} />
    </div>
  )
}
