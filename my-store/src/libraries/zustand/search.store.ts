import { create } from "zustand";
import { searchStoreModel } from "@/shared";

export const useSearchStore = create<searchStoreModel>()(
    (set, _get) => ({
        products: [],
        historyProducts: [],
        addToHistory: (item) => set((state) => ({ historyProducts: [item, ...state.historyProducts], products: []})),
        add: (items) => set({ products: [...items] }),
    })
)