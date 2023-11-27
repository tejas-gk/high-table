import '../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import TeamSwitcher from '@/components/team-switcher'
import { MainNav } from '@/components/main-nav'
import { Search } from '@/components/search'
import { ModeToggle } from '@/components/mode-toggle'
import Image from 'next/image'
import { UserNav } from '@/components/user-nav'
import { Toaster } from "@/components/ui/toaster"
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { EdgeStoreProvider } from '../lib/edgestore';
import { appConfig } from '@/config/app'
import { SidebarNav } from '@/components/sidebar'
import { Separator } from '@/components/ui/separator'
import Navbar from '@/components/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: "High Table",
    template: "%s | High Table",
  },
  description: 'Manage your E-commerce store with ease',
  keywords: ['E-commerce', 'Store', 'Dashboard', 'Admin'],
  applicationName: 'High Table',
  creator: 'Vercel',
}
const items = [
  {
    title: "Overview",
    icon: "home",
    href: "/",
  },
  {
    title: "Customers",
    icon: "users",
    href: "/customers",
  },
  {
    title: "Products",
    icon: "home",
    href: "/products",
  },
  {
    title: "Orders",
    icon: "home",
    href: "/orders",
  },
  {
    title: "Documentation",
    icon: "home",
    href: "/documentation",
  },
  {
    title: "Marketing",
    icon: "home",
    href: "/marketing",
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>{appConfig.name}</title>
        <meta name="description" content="" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <EdgeStoreProvider>
            <Toaster />
            <div className="md:hidden">

            </div>
            {/* <div className="hidden space-y-6 md:block"> */}
              {/* <div className="space-y-0.5">
                <Navbar />
              </div> */}
              {/* <Separator className="my-6" /> */}
              <div className="flex flex-col space-y-8">
                {/* <aside className="lg:w-[10%]">
                  <SidebarNav items={items} />
                </aside> */}
                <Navbar/>
                <div className="flex-1">{children}</div>
              </div>
            {/* </div> */}
          </EdgeStoreProvider>
        </ThemeProvider>
      </body>
    </html >
  )
}
