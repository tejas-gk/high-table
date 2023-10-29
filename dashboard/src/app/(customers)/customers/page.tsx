import { DataTable } from "./data-table"
import prisma from '@/lib/prismadb';

const getUsers = async () => {
    const users = await prisma.user.findMany()
    return users
}

export default async function customers() {
    const users = await getUsers()

    return (
        <div className="container py-10 mx-auto">
            <DataTable data={users} />
        </div>
    )
}
