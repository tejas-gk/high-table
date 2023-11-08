"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Search } from './search'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Progress } from "@/components/ui/progress"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from '@/lib/utils'
import { ShoppingCart } from 'lucide-react'
import { ModeToggle } from './mode-toggle'
import { getSession, signOut } from 'next-auth/react'
import Cart from './cart'
import { usePathname, useRouter } from 'next/navigation'
import Router from 'next/router'
import Image from 'next/image'


const groceryItems: { title: string; href: string; description: string }[] = [
    {
        title: "Bananas",
        href: "/products/bananas",
        description: "Fresh and ripe bananas, packed with nutrients.",
    },
    {
        title: "Apples",
        href: "/products/apples",
        description: "Crisp and juicy apples, perfect for snacking.",
    },
    {
        title: "Milk",
        href: "/products/milk",
        description: "Fresh dairy milk, essential for a balanced diet.",
    },
    {
        title: "Bread",
        href: "/products/bread",
        description: "Soft and fluffy bread for your morning toast.",
    },
    {
        title: "Eggs",
        href: "/products/eggs",
        description: "Farm-fresh eggs, a versatile ingredient for cooking.",
    },
];

const decorItems = [
    {
        title: "Wall Art",
        href: "/products/wall-art",
        description: "Beautiful artwork to adorn your walls.",
    },
    {
        title: "Candles",
        href: "/products/candles",
        description: "Elegant candles for a cozy atmosphere.",
    },
    {
        title: "Vases",
        href: "/products/vases",
        description: "Decorative vases to display your blooms.",
    },
    {
        title: "Throw Pillows",
        href: "/products/throw-pillows",
        description: "Soft and stylish throw pillows for your sofa.",
    },
    {
        title: "Mirrors",
        href: "/products/mirrors",
        description: "Reflective mirrors to add depth to your space.",
    },
];


export default function Navbar() {
    const [info, setInfo] = React.useState(null)
    const router = useRouter()
    const pathname = usePathname()
    useEffect(() => {
        const fetchSession = async () => {
            const session = await getSession();
            console.log('Session:', session);
            // @ts-ignore
            setInfo(session)
            console.log(info, 'info')
        };

        fetchSession();
    }, []);

    const [isNavbarAtTop, setIsNavbarAtTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsNavbarAtTop(scrollPosition <= 100);
        };
        console.log('hello')
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='flex sm:hidden justify-between items-center px-10 mt-2 border-b'>
                <Sheet>
                    <SheetTrigger asChild>
                        <ShoppingCart className='cursor-pointer' />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription>
                                Carty-Moron
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <p>Home</p>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <p>Samsung</p>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>

                <h3 className='font-bold text-2xl'>Logo</h3>

                <Sheet>
                    <SheetTrigger asChild>
                        <ShoppingCart />
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>My Cart</SheetTitle>
                            <SheetDescription>
                                This is a list of your cart
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <p>product</p>
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <p>product</p>
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Buy</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>

            {/* desktop */}
            <div className='border-b py-2 px-8 md:flex h-16 items-center hidden z-50 sticky top-0 bg-white dark:bg-black'>
                <div>
                    <NavigationMenu>
                        <Link href="/" passHref>
                            <span className='font-bold dark:text-white pr-4'>
                                Carty-Moron
                            </span>
                        </Link>
                        <NavigationMenuItem className='list-none'>
                            <Link href="/products" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Products
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Accesories</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <a
                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                    href="/"
                                                >
                                                    <div className="mb-2 mt-4 text-lg font-medium">
                                                        Popular
                                                    </div>
                                                    <p className="text-sm leading-tight text-muted-foreground">
                                                        Lorem ipsum dolor sit amet
                                                    </p>
                                                </a>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href="/products/1/1" title="Static Product">
                                            Lorem ipsum dolor sit amet.
                                        </ListItem>
                                        <ListItem href="/" title="Electronics">
                                            Lorem ipsum dolor sit amet.
                                        </ListItem>
                                        <ListItem href="/" title="Clothes">
                                            Lorem ipsum dolor sit amet.
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Decor</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {decorItems.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Groceries</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {groceryItems.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                href={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>





                <div className="ml-auto flex items-center space-x-4">
                    {/* search bar */}
                    {
                        (!isNavbarAtTop) && <Search />
                    }
                    {/* cart */}
                    <Cart />

                    <ModeToggle />

                    {/* dropdown menu */}
                    {
                        info ? (

                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                        <Avatar className="h-8 w-8">
                                            <AvatarImage src="/avatars/01.png" alt="@shadcn" />
                                            <AvatarFallback>
                                                {
                                                    info?.user?.name[0] + info?.user?.name[info?.user?.name.length - 1]
                                                }
                                            </AvatarFallback>
                                        </Avatar>
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent className="w-56" align="end" forceMount>
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none">
                                                {info?.user?.name}
                                            </p>
                                            <p className="text-xs leading-none text-muted-foreground">
                                                {info?.user?.email}
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <div className="flex justify-between">
                                            <p className='text-gray-500 text-xs'>Level 1</p>
                                            <p className='text-gray-500 text-xs'>5/100 Points</p>
                                            </div>
                                            <Progress value={33} className='h-1' />
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <Link href="/profile">
                                                Profile
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href="/profile/appearance">
                                                History
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href="/profile/appearance">
                                                Reviews
                                            </Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <Link href="/profile/appearance">
                                                Settings
                                            </Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>

                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <p onClick={() => signOut()}>Sign out</p>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link href="/register">
                                <p className="text-sm font-medium leading-none">Sign in</p>
                            </Link>
                        )
                    }
                </div>
            </div >
        </>
    )
}


const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"