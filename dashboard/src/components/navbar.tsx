import React from 'react'
import { Search } from './search'
import { ModeToggle } from './mode-toggle'
import { UserNav } from './user-nav'
import TeamSwitcher from './team-switcher'
import { MainNav } from './main-nav'

export default function Navbar() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <TeamSwitcher />
                <MainNav className="mx-6" />
                <div className="ml-auto flex items-center space-x-4">
                    <Search />
                    <ModeToggle />
                    <UserNav />
                </div>
            </div>
        </div>
    )
}
