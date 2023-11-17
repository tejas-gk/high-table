"use client"
import { motion } from "framer-motion";
import { useRouter, useSelectedLayoutSegment } from "next/navigation"
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs"
import { useState } from "react";
import { cn } from "@/lib/utils"
import { Separator } from "@/components/ui/separator"

interface StoreTabsProps {
    storeId: string
}

export function StoreTabs({ storeId }: StoreTabsProps) {
    const router = useRouter()
    const segment = useSelectedLayoutSegment()

    const tabs = [
        {
            title: "Product",
            href: `/products/${storeId}`,
            isActive: segment === null,
        },
        {
            title: "Analytics",
            href: `/products/${storeId}/analytics`,
            isActive: segment === "analytics",
        },
        {
            title: "Orders",
            href: `/products/${storeId}/orders`,
            isActive: segment === "orders",
        },
        {
            title: "Reviews",
            href: `/products/${storeId}/reviews`,
            isActive: segment === "reviews",
        },
    ]

    return (
        <Tabs
            defaultValue={tabs.find((tab) => tab.isActive)?.href ?? tabs[0]?.href}
            className="sticky top-0 z-30 w-full overflow-auto bg-background px-1"
            onValueChange={(value) => router.push(value)}
        >
            <TabsList className="inline-flex items-center justify-center space-x-1.5 text-muted-foreground">
                {tabs.map((tab, index) => (
                    <div
                        role="none"
                        key={tab.href}
                        className={cn(
                            "border-b-2 border-transparent py-1.5",
                            tab.isActive && "border-foreground"
                        )}
                    >
                        <motion.div
                            layoutId="underline"
                            transition={{ type: "spring", duration: 0.5 }} 
                        >
                            <TabsTrigger
                                value={tab.href}
                                className={cn(
                                    "inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium text-muted-foreground ring-offset-background transition-all hover:bg-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
                                    tab.isActive && "text-foreground"
                                )}
                            >
                                {tab.title}
                                {tab.isActive && (
                                    <motion.div
                                        layoutId="underline"
                                        transition={{ type: "spring", duration: 1 }}
                                    />
                                )}

                            </TabsTrigger>
                        </motion.div>
                    </div>
                ))}
            </TabsList>
            <Separator />
        </Tabs>
    )
}


export default function layout({ children }: any) {
    return (
        <div className="space-y-8 overflow-auto px-16">
            <StoreTabs storeId={'3d9dac21-bc2f-4ac7-a379-4b7452296e08'} />
            {children}
        </div>
    )
}