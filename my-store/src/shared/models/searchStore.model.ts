import type { CardsSearch } from "./cardsSearch.model";

export interface searchStoreModel {
    products: CardsSearch[];
    historyProducts: CardsSearch[];
    addToHistory: (item: CardsSearch) => void;
    add: (items: CardsSearch[]) => void;
}