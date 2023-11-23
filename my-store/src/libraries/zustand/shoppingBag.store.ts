import { create } from "zustand";
import { ShoppingBagModel } from "@/shared";

export const useShoppingBagStore = create<ShoppingBagModel>()(
    (set, _get) => ({
        products: [],
        addProduct: (item) => set((state) => ({ products: [item, ...state.products] })),
        removeProduct: (id) => set((state) => ({ products: state.products.filter((item) => item.id !== id) })),
        saveToLocalStorage: (products) => set((state) => ({}))        
    })
);