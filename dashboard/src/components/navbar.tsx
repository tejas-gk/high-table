import React from 'react'
import { Search } from './search'
import { ModeToggle } from './mode-toggle'
import { UserNav } from './user-nav'
import TeamSwitcher from './team-switcher'
import { MainNav } from './main-nav'
import { Icons } from './icons'
export default function Navbar() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                {/* <MainNav className="mx-6" /> */}
                <Icons.logo
                    className='overflow-hidden transition-all dark:text-white '
                />

                <div className="ml-auto flex items-center space-x-4">
                    <Search />
                    <ModeToggle />
                <TeamSwitcher />
                    {/* <UserNav /> */}
                </div>
            </div>
        </div>
    )
}
