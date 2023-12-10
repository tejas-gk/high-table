import React, { useEffect } from 'react'
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
import { ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'
import CartItem from './cart-item'
import useCartStore from '@/store/cart-store'
import { useRouter } from 'next/navigation'
import { getSession } from 'next-auth/react'



export default function Cart() {
    const { items } = useCartStore()
    const router = useRouter()
    const userId = 'f004754b-ab2e-4421-a31e-66f7d52d039d'

    const calculateTotal = () => {
        let total = 0
        items.forEach((item) => {
            total += parseInt(item.price) * 1
        })
        return total
    }
    return (
        <Sheet>
            <SheetTrigger asChild>
                <ShoppingCart className='cursor-pointer' />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>My Cart</SheetTitle>
                    <SheetDescription>
                        This is a list of your cart
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="mt-8">
                        <div className="flow-root overflow-y-auto">
                            <ul role="list" className="-my-6 divide-y divide-gray-200 dark:divide-gray-700 ">
                                {items.map((product,index) => (
                                    <CartItem product={product} key={index} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>


                <SheetFooter className='absolute bottom-1 pr-4 z-50'>
                    <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>
                                ₹{calculateTotal()}
                            </p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <Button size='lg' className='mt-6 w-full'
                            onClick={async () => {
                                //   const userId = await session?.user?.name
                                // console.log(userId,'userid')
                                await fetch('/api/checkout', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify({
                                        items,
                                        userId
                                    })
                                })
                                    .then((res) => res.json())
                                    .then((session) => {
                                        console.log(session.url)
                                        router.push(session.url)
                                    })

                            }}
                        >
                            Checkout
                        </Button>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                            <p>
                                or
                                <button
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"

                                >
                                    Continue Shopping
                                    <span aria-hidden="true"> &rarr;</span>
                                </button>
                            </p>
                        </div>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
