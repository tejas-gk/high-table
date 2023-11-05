import { create } from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

type Item ={
    id: String;
    name: string;
    price: string;
    rating: number;
    reviewCount: number;
    href: string;
    imageSrc: string;
    imageAlt: string;
    colors: { name: string; class: string; selectedClass: string; }[];
    sizes: { name: string; inStock: boolean; }[];
} & { quantity: number };
interface CartState {
    items: Item[];
    addToCart: (item: Item) => void;
    removeFromCart: (item: Item) => void;
    removeAllFromCart: () => void;
    itemAlreadyInCart: (item: Item) => boolean;
}

const useCartStore = create(persist<CartState>((set, get) => ({
    items: [],
    addToCart: (data: Item) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(item => item.id === data.id);

        if (existingItemIndex !== -1) {
            // Item already exists, increment quantity
            const newItems = [...currentItems];
            newItems[existingItemIndex].quantity += 1;
            set({ items: newItems });
        } else {
            // Item doesn't exist, add to cart
            set({ items: [...currentItems, { ...data, quantity: 1 }] });
        }
    },
    removeFromCart: (data: Item) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(item => item.id === data.id);

        if (existingItemIndex !== -1) {
            // Item exists, decrement quantity
            const newItems = [...currentItems];
            newItems[existingItemIndex].quantity -= 1;
            if (newItems[existingItemIndex].quantity === 0) {
                // Remove item from cart
                newItems.splice(existingItemIndex, 1);
            }
            set({ items: newItems });
        }
    },
    removeAllFromCart: () => {
        set({ items: [] });
    },
    itemAlreadyInCart: (data: Item) => {
        return get().items.some(item => item.id === data.id);
    }
}), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
}));

export default useCartStore;
