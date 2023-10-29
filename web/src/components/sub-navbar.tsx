'use client'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import Link from "next/link"
import React from "react";


const subCategories = [
    {
        title: "Shirts",
        href: "/docs/primitives/buttons",
        description: "Buttons allow users to take actions, and make choices, with a single tap.",
    },
    {
        title: "SKirts",
        href: "/docs/primitives/forms",
        description:
            "Forms are used to collect user input. They allow users to send data to the server.",
    },
    {
        title: "Pants",
        href: "/docs/primitives/lists",
        description:
            "Lists are continuous, vertical indexes of text or images.",
    },
    {
        title: "Jeans",
        href: "/docs/primitives/menus",
        description:
            "Menus display a list of choices on a transient sheet of material.",
    },
    {
        title: "Stickers",
        href: "/docs/primitives/pickers",
        description:
            "Pickers provide a simple way to select a single value from a pre-determined set.",
    },
    {
        title: "Furnitures",
        href: "/docs/primitives/sliders",
        description:
            "Sliders allow users to make selections from a range of values.",
    },
    {
        title: "Rice",
        href: "/docs/primitives/surfaces",
        description:
            "Surfaces are the background elements upon which your UI is placed.",
    },
    {
        title: "Paintings",
        href: "/docs/primitives/typography",
        description:
            "Typography is the visual representation of text.",
    },
    {
        title: "Pots",
        href: "/docs/primitives/feedback",
        description:
            "Feedback is the visual response to user input.",
    },
    {
        title: "Cups",
        href: "/docs/primitives/overlays",
        description:
            "Overlays are temporary, modal surfaces that appear on top of the main content.",
    },
    {
        title: "Mugs",
        href: "/docs/primitives/progress",
        description:
            "Progress indicators express an unspecified wait time or display the length of a process.",
    },
    {
        title: "Bowls",
        href: "/docs/primitives/tables",
        description:
            "Tables display information in a way that's easy to scan, so that users can look for patterns and insights.",
    },
    {
        title: "Plates",
        href: "/docs/primitives/tooltips",
        description:
            "Tooltips display informative text when users hover over, focus on, or tap an element.",
    },
    {
        title: "Spoon",
        href: "/docs/primitives/avatars",
        description:
            "Avatars are images that represent a person or user.",
    },
    {
        title: "Forks",
        href: "/docs/primitives/badges",
        description:
            "Badges are small pieces of information used to represent statuses, quantities, and more.",
    },
    {
        title: "Knives",
        href: "/docs/primitives/chips",
        description:
            "Chips are compact elements that represent an input, attribute, or action.",
    },
    {
        title: "Cups",
        href: "/docs/primitives/labels",
        description:
            "Labels tag content, making information easy to scan and parse.",
    },
    {
        title: "Bowls",
        href: "/docs/primitives/progress",
        description:
            "Progress indicators express an unspecified wait time or display the length of a process.",
    },
    {
        title: "Plates",
        href: "/docs/primitives/tooltips",
        description:
            "Tooltips display informative text when users hover over, focus on, or tap an element.",
    },
    {
        title: "Spoon",
        href: "/docs/primitives/avatars",
        description:
            "Avatars are images that represent a person or user.",
    },
    
]


export default function SubNavbar() {
  return (
      <div className="-z-[1000] mt-2">
          <NavigationMenu>
              <NavigationMenuItem className='list-none flex'>
                  {
                      subCategories.map((item, index) => (
                          <div key={index}>
                                <Link href={item.href} key={index}>
                                    <div className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                        <div className="text-sm font-medium leading-none">{item.title}</div>
                                    </div>
                                </Link>
                          </div>
                        ))
                 }
              </NavigationMenuItem>
            
          </NavigationMenu>
    </div>
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