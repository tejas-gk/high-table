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
import OfferBanner from '@/components/banners/offer-banner'
import RegisterBanner from '@/components/banners/register-banner'
import usePageVisibility from '@/hooks/use-page-active'
import SwiperBanner from '../components/banners/swiper-banner'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
})
{
  const isVisible = usePageVisibility();
  return (
    <html lang="en">
      <head>
        <title>
           {isVisible ? 'Carty Moron' : 'This Tab is all alone :('}
        </title>
        <script defer src="https://unpkg.com/@tinybirdco/flock.js" data-host="https://api.tinybird.co" data-token="p.eyJ1IjogIjcwMDI3NGFmLTA0YTEtNGViYS05ODM4LWQ3NDNmMWI4ZGJhYSIsICJpZCI6ICI1NmQ4NjJiZC1mYmZhLTRkZDctOGE3ZC0zYzExMDI2ODk5MTYiLCAiaG9zdCI6ICJldV9zaGFyZWQifQ.nVfbLDqBvSTGq07c9RAR_XZ2aKMZA71jn9ejG0BAKt0"></script>
      </head>
      <body className={`${inter.className}`}>
        <SessionProvider>
          {/* <OfferBanner /> */}
          {/* <RegisterBanner /> */}
          {/* <SwiperBanner/> */}
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
