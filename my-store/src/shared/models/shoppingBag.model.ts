import { SimplifiedProduct } from "./simplifiedProduct.model";

export interface ShoppingBagModel {
    products: SimplifiedProduct[];
    addProduct: (item: SimplifiedProduct) => void;
    removeProduct: (id: string) => void;
    saveToLocalStorage: (products: SimplifiedProduct[] | SimplifiedProduct) => void;
}