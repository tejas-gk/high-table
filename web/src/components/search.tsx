"use client"

import * as React from "react"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
} from "lucide-react"

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { Input } from "./ui/input"
import { searchProducts } from "@/actions/product"
const categories = [
    {
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        name: 'Tops',
        products: 50,
    },
    {
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
        name: 'Baniyans',
        products: 50,
    },
    {
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
        name: 'Kaccha',
        products: 50,
    },
    {
        image: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
        name: 'Tops',
        products: 50,
    },
]

export function Search() {
    const [open, setOpen] = React.useState(false)
    const [query, setQuery] = React.useState("")
    const [results, setResults] = React.useState([])

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    React.useEffect(() => {
        const searchResult = async () => {
            try {
                const result = await searchProducts(query)
                console.log(result, 'rick and morty',query)
                setResults(result)

            } catch (error) {
                console.log(error)
            }
        }
        searchResult()
    }, [query])



    return (
        <>
            <Input
                type="search"
                placeholder="Search..."
                className="md:w-[100px] lg:w-[300px]"
            />
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput placeholder="Type a command or search..."
                    value={query}
                    onValueChange={setQuery}
                />
                <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                        {
                            results.map((res, i) => (
                                <CommandItem key={i}>
                                    <img src={res.imageSrc} className="mr-2 h-4 w-4" alt="" />
                                    <span>{res.name}</span>
                                </CommandItem>
                            ))
                        }
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                        <CommandItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>Profile</span>
                            <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <CreditCard className="mr-2 h-4 w-4" />
                            <span>Billing</span>
                            <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                            <CommandShortcut>⌘S</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </CommandDialog>
        </>
    )
}
