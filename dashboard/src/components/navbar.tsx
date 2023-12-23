import React from 'react'
import { Search } from './search'
import { ModeToggle } from './mode-toggle'
import { UserNav } from './user-nav'
import StoreSwitcher from './store-switcher'
import { MainNav } from './main-nav'
import { Icons } from './icons'
import prisma from '@/lib/prismadb'
const getAllStores=async()=>{
    const stores = await prisma.store.findMany();
    return stores
}

export default async function Navbar() {
    const stores = await getAllStores()
    console.log(stores)
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <Icons.logo
                    className='overflow-hidden transition-all dark:text-white '
                />

                <div className="ml-auto flex items-center space-x-4">
                    <Search />
                    <ModeToggle />
                    <StoreSwitcher items={stores}/>
                </div>
            </div>
        </div>
    )
}
