import { ProductModel } from "../models";
// Sub Types
type Image = {
    src: string;
    alt: string
}
export type CardsContentHomepage = {
    image: string;
    title: string;
    badge: string;
    content: string;
    buttonContent: string;
}

// Types
export type Header = {
    title1: string;
    title2?: string;
    paragraph: string;
    anchor1: string;
    anchor2: string;
    image: Image;
}

export type InlineProducts = {
    principalTitle?: string
    products: ProductModel[];
}

export type Brands = {
    title: string;
    brands: Image[];
}

export type NewArrivals = {
    principalTitle?: string
    products: ProductModel[];
}

export type NewsLetter = {
    title: string;
    shortTitle: string;
    EmailInput: {
        label: string;
        placeholder: string;
        InputHelper: string;
    }
    buttonLabel: string;
}

// Interface
export interface GlobalHomepage {
    id: string;
    header: Header;
    inlineProducts: InlineProducts;
    brands: Brands;
    newArrivals: NewArrivals;
    newsLetter: NewsLetter;
}