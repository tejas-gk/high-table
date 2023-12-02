import { CalendarDateRangePicker } from "@/components/date-range-picker";
import prisma from '@/lib/prismadb';
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table";

const getUsers = async () => {
    const users = await prisma.user.findMany()
    return users
}

export default async function customers() {
    const users = await getUsers()
    console.log(users)
    return (
        <>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                        <p className="text-muted-foreground">
                            Here&apos;s a list of your Users
                        </p>
                    </div>
                    <CalendarDateRangePicker />
                </div>
                {/* @ts-ignore */}
                <DataTable data={users} columns={columns} />
            </div>
        </>
    )
}
