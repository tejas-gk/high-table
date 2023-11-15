"use client"

import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { labels } from "../data/data"
import { ProductSchema } from "../data/schema"
import { Trash } from "lucide-react"
import { ToastAction } from "@/components/ui/toast"
import { useState } from "react"
import { toast } from "@/components/ui/use-toast"
import { AlertModal } from "@/components/modal/alert-modal"
import Link from "next/link"
interface DataTableRowActionsProps<TData> {
    row: Row<TData>
}

export function DataTableRowActions<TData>({
    row,
}: DataTableRowActionsProps<TData>) {
    const task = ProductSchema.parse(row.original)
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    console.log(task)
    const onConfirm = async () => {
        try {
            setLoading(true);
            await fetch(`/api/products/${task.id}`, {
                method: "DELETE",
            });
            toast({
                title: "Product deleted",
                description: "You can still view them in soft deletes",
            })
        } catch (error: any) {
            toast({
                title: "Something went wrong",
                description: error.message,
                variant: "destructive",
                action: <ToastAction altText="Try again">Try again</ToastAction>,
            })
        } finally {
            setOpen(false);
            setLoading(false);
        }
    };
    return (
        <>
            <AlertModal
                isOpen={open}
                onClose={() => setOpen(false)}
                onConfirm={onConfirm}
                loading={loading}
            />
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                >
                    <DotsHorizontalIcon className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
                    <DropdownMenuItem>
                        <Link href={`/products/${task.id}`}>
                            Edit
                            </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Make a copy</DropdownMenuItem>
                <DropdownMenuItem>Favorite</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Labels</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuRadioGroup value={task?.Category?.title}>
                            {labels?.map((label) => (
                                <DropdownMenuRadioItem key={label.value} value={label.value}>
                                    {label.label}
                                </DropdownMenuRadioItem>
                            ))}
                        </DropdownMenuRadioGroup>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <DropdownMenuItem
                            onClick={() => setOpen(true)}
                    >
                        <Trash className="mr-2 h-4 w-4" /> Delete
                    </DropdownMenuItem>
                </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
            </>
    )
}
