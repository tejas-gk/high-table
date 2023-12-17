'use client'
import { MoreVertical, ChevronLast, ChevronFirst, HomeIcon, BarChart, UserIcon, ShoppingBag, CircleDollarSign, Settings } from "lucide-react"
import Link from "next/link"
import { useContext, createContext, useState } from "react"
import { usePathname, useSearchParams } from 'next/navigation'
import { Icons } from "./icons"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { UserNav } from "./user-nav"

const SidebarContext = createContext({})

const sidebarItems = [
    {
        title: "Overview",
        icon: <Icons.home />,
        href: "/",
    },
    {
        title: "Customers",
        icon: <Icons.user />,
        href: "/customers",
    },
    {
        title: "Products",
        icon: <Icons.shoppingBag />,
        href: "/products",
    },
    {
        title: "Orders",
        icon: <Icons.circleDollarSign />,
        href: "/orders",
    },
    {
        title: "Marketing",
        icon: <Icons.marketing />,
        href: "/marketing",
    },
    {
        title: "Broadcast",
        icon: <Icons.broadcast />,
        href: "/marketing",
    },
    {
        title: "Analytics",
        icon: <Icons.analytics />,
        href: "/analytics",
    }
]

export default function Sidebar() {
    const [expanded, setExpanded] = useState(true)
    const path = usePathname()
    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-background border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">

                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-primary-foreground dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors dark:text-white
                        "
                    >
                        {expanded ? <ChevronFirst /> : <ChevronLast />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-3">
                        {sidebarItems.map((item) => (
                            <SidebarItem
                                key={item.title}
                                icon={item.icon}
                                text={item.title}
                                link={item.href}
                                active={item.href === path}
                            // subItems={item.subItems ? item.subItems.map(subItem => ({ ...subItem, text: subItem.title, link: subItem.href })) : null}
                            />
                        ))}
                    </ul>
                </SidebarContext.Provider>

                <div className="border-t flex p-3">
                    <img
                        src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
                        alt=""
                        className="w-10 h-10 rounded-md"
                    />
                    <div
                        className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
                    >
                        <div className="leading-4 text-primary-foreground">
                            <h4 className="font-semibold dark:text-white">John Doe</h4>
                            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
                        </div>
                        <UserNav />
                    </div>
                </div>
            </nav>
        </aside>
    )
}
interface SidebarItemProps {
    icon: React.ReactNode
    text: string
    active?: boolean
    alert?: boolean
    link: string
    subItems?: SidebarItemProps[] | null | undefined
}

export function SidebarItem({ icon, text, active, alert, link, subItems }: SidebarItemProps) {
    // @ts-ignore
    const { expanded } = useContext<{ expanded: boolean }>(SidebarContext)
    const [expandSubBar, setExpandSubBar] = useState<boolean>(false)

    const renderSubItems = () => {
        if (!subItems || subItems.length === 0) {
            return null;
        }

        return (
            <ul className="ml-4 mt-2">
                {subItems.map((subItem) => (
                    <SidebarItem key={subItem.text} {...subItem} />
                ))}
            </ul>
        );
    };

    return (
        <>
            <Link href={link}>
                <li
                    className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group z-[100]
        ${active
                            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                            : "hover:bg-indigo-50 text-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                        }
    `}
                >
                    {icon}
                    <span
                        className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                            }`}
                    >
                        {text}
                    </span>
                    {alert && (
                        <div
                            className={`absolute right-2 w-2 h-2 rounded  bg-indigo-400 ${expanded ? "" : "top-2"
                                }`}
                        />
                    )}

                    {!expanded && (
                        <div
                            className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
                        >
                            {text}
                        </div>
                    )}
                </li>
            </Link>
            {renderSubItems()}
        </>
    )
}