'use client'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { SessionProvider } from 'next-auth/react'
import { authOptions } from './api/auth/[...nextauth]/route'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <SessionProvider>
          <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8 rounded-b-md">
            Get free delivery on orders over ₹100
          </p>
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
          <div className="px-10">
              <Toaster />
              {children}
          </div>
              {/* <Footer /> */}
            </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
