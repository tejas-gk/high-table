"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import { ChevronLeftIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { HomeIcon } from "lucide-react"
import { useState } from "react"

interface SidebarNavItem {
    title: string
    icon?: keyof typeof Icons
    href?: string
    external?: boolean
    disabled?: boolean
}

export interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
    items: SidebarNavItem[]
}

// const items: SidebarNavItem[] = [
//     {
//         title: "Overview",
//         icon: "home",
//         href: "/",
//     },
//     {
//         title: "Customers",
//         icon: "users",
//         href: "/customers",
//     },
//     {
//         title: "Products",
//         icon: "home",
//         href: "/products",
//     },
//     {
//         title: "Orders",
//         icon: "home",
//         href: "/orders",
//     },
//     {
//         title: "Documentation",
//         icon: "home",
//         href: "/documentation",
//     },
//     {
//         title: "Marketing",
//         icon: "home",
//         href: "/marketing",
//     },
// ]

export function SidebarNav({ items = [], className, ...props }: SidebarNavProps) {
    const segment = useSelectedLayoutSegment()
    console.log(Icons["home"])

    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    if (!items?.length) return null

    return (
        <div className={cn("flex w-full flex-col gap-2", className)} {...props}>
            {items.map((item, index) => {
                const Icon = item.icon ? Icons[item.icon] : ChevronLeftIcon

                return item.href ? (
                    <Link
                        aria-label={item.title}
                        key={index}
                        href={item.href}
                        target={item.external ? "_blank" : ""}
                        rel={item.external ? "noreferrer" : ""}
                    >
                        <span
                            className={cn(
                                "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground",
                                item.href.includes(String(segment))
                                    ? "bg-muted font-medium text-foreground"
                                    : "text-muted-foreground",
                                item.disabled && "pointer-events-none opacity-60"
                            )}
                        >
                            <HomeIcon className="mr-2 h-4 w-4" aria-hidden="true" />
                            <span>{item.title}</span>
                        </span>
                    </Link>
                ) : (
                    <span
                        key={index}
                        className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
                    >
                        {item.title}
                    </span>
                )
            })}
        </div>
    )
}
