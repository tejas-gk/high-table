import { Cross2Icon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DataTableViewOptions } from "@/components/table/data-table-view-options"
import { priorities, statuses } from "../data/data"
import { DataTableFacetedFilter } from "@/components/table/data-table-faceted-filter"
import React from "react"
import Link from "next/link"
import { Download, PlusIcon, Trash } from "lucide-react"
import { downloadToExcel } from "@/lib/xlsx"
import { DataTableCategory } from "./data-table-category"
import { getAllCategories } from "@/actions/products"
interface DataTableToolbarProps<TData> {
    table: Table<TData>
}



export function DataTableToolbar<TData>({
    table,
}: DataTableToolbarProps<TData>) {
    const isFiltered = table.getState().columnFilters.length > 0;
    const cat = getAllCategories()
    const selectedRows = table.getState().rowSelection;
    const handleBulkDelete = async (id: string[]) => {
        console.log(id)
    }
    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-1 items-center space-x-2">
                <Input
                    placeholder="Filter Products..."
                    value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)
                    }
                    className="h-8 w-[150px] lg:w-[250px]"
                />
                {table.getColumn("status") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("status")}
                        title="Status"
                        options={statuses}
                    />
                )}
                {table.getColumn("priority") && (
                    <DataTableFacetedFilter
                        column={table.getColumn("priority")}
                        title="Priority"
                        options={priorities}
                    />
                )}
                {isFiltered && (
                    <Button
                        variant="ghost"
                        onClick={() => table.resetColumnFilters()}
                        className="h-8 px-2 lg:px-3"
                    >
                        Reset
                        <Cross2Icon className="ml-2 h-4 w-4" />
                    </Button>
                )}
            </div>
            <div className="flex space-x-2">
                <DataTableCategory
                    column={table.getColumn("Category.title")}
                    title="Category"
                    options={priorities}
                />
                <Button variant='outline'
                    className="ml-auto hidden h-8 lg:flex"
                    size="sm"
                    onClick={() => downloadToExcel()}
                >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                </Button>
                {
                    Object.keys(selectedRows).length > 0 && (
                        <Button variant='destructive'
                            className="ml-auto hidden h-8 lg:flex"
                            size="sm"
                            onClick={() => handleBulkDelete(Object.keys(selectedRows))}
                        >
                            <Trash className="mr-2 h-4 w-4" />
                            Delete
                        </Button>
                    )
                }
                <Link href="/products/new">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="ml-auto hidden h-8 lg:flex"
                    >
                        <PlusIcon className="mr-2 h-4 w-4" />
                        New Product
                    </Button>
                </Link>
                <DataTableViewOptions table={table} />
            </div>
        </div>
    )
}
