import { create } from "zustand";
import { allStateOpenClose } from "@/shared";

export const useOpenCloseStore = create<allStateOpenClose>()(
    (set, _get) => ({
        shoppingCart: false,
        modalSearchBar: false,
        switchShoppingCart: () => set((state) => ({ shoppingCart: !state.shoppingCart })),
        switchSeachBar: () => set((state) => ({ modalSearchBar: !state.modalSearchBar }))
    })
)