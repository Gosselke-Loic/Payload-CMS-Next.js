import { ProductModel, SimplifiedProduct } from "@/shared";

export function SimplifyProduct(items: ProductModel[] | undefined): SimplifiedProduct[] | undefined {
    if(!items) return undefined;
    let simplifiedProducts: SimplifiedProduct[] = [];
    items.map((item) => {
        simplifiedProducts.push(new SimplifiedProduct(item))
    })
    return simplifiedProducts;
} 