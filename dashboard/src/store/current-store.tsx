import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Item = Record<string, any>;
interface StoreState {
    currentStore: string;
    setCurrentStore: (store: string) => void;
}

const useStore = create(persist<StoreState>((set, get) => ({
    currentStore: '',
    setCurrentStore: (store: string) => {
        set({ currentStore: store });
    },

}), {
    name: 'store-storage',
    storage: createJSONStorage(() => localStorage)
}));

export default useStore;

export const CurrentStore = () => useStore((state) => state.currentStore);
