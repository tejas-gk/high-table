import { promises as fs } from "fs"
import path from "path"
import Image from "next/image"
import { z } from "zod"
import prisma from "@/lib/prismadb"
import { columns } from "./components/columns"
import { DataTable } from "./components/data-table"
import { CalendarDateRangePicker } from "@/components/date-range-picker"
import { Metadata } from "next"
import useStore from "@/store/current-store"

export const metadata: Metadata = {
    title: "Products",
    description: "Check out some examples app built using the components.",
}

const getAllProducts = async () => {
    try {
        const products = await prisma.product.findMany({
            include: {
                colors: true,
                sizes: true,
                Category: true,
            },
            // where: {
            //     storeId
            // },
        });
        return products
    } catch (err) {
        console.log(err)
    }
}

export default async function TaskPage() {
    const products = await getAllProducts();
    return (
        <>
            <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                        <p className="text-muted-foreground">
                            Here&apos;s a list of your Products
                        </p>
                    </div>
                    <CalendarDateRangePicker />
                </div>
                {/* @ts-ignore */}
                <DataTable data={products} columns={columns} />
            </div>
        </>
    )
}
