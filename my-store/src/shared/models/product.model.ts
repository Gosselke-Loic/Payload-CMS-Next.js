export type ImagesModel = {
    src: string;
    alt: string;
}
export type BreadcrumbsModel = {
    id: number;
    name: string;
}
export type DetailsModel = {
    id: string;
    blockType: string;
    blockName: string;
    name: string;
    value: string;
}
export type TagsModel = {
    id: number;
    name: string;
}
export type ReviewsModel = {
    review: {
        user: string;
        opinion: string;
        average: number;
    };
    id: string
}

export interface Product {
    id: string;
    name: string;
    stock: number;
    price: number;
    date: Date;
    description: string;
    slider: ImagesModel[];
    breadcrumbs: BreadcrumbsModel[];
    details: DetailsModel[];
    tags: TagsModel[];
    reviews: ReviewsModel[];
    createdAt: Date;
    updatedAt: Date;

    readonly computedAverage: number;
    readonly computedReviews: number;
}

export interface ProductArray {
    docs: ProductModel[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
}

export class ProductModel implements Product {
    public id!: string;
    public name!: string;
    public stock!: number;
    public price!: number;
    public date!: Date;
    public description!: string;
    public slider!: ImagesModel[];
    public breadcrumbs!: BreadcrumbsModel[];
    public details!: DetailsModel[];
    public tags!: TagsModel[];
    public reviews!: ReviewsModel[];
    public createdAt!: Date;
    public updatedAt!: Date;

    constructor(
        {
            id,
            name,
            stock,
            price,
            slider,
            breadcrumbs,
            details,
            tags,
            reviews,
            createdAt,
            updatedAt
        }: ProductModel
    ) {
        this.id = id;
        this.name = name;
        this.stock = stock;
        this.price = price;
        this.slider = slider;
        this.breadcrumbs = breadcrumbs;
        this.details = details;
        this.tags = tags;
        this.reviews = reviews;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    get computedAverage(): number {
        let count = 0;
        if(!this.reviews) return count;
        if(this.reviews.length >= 1) {
            this.reviews.map((item) => count += item.review.average)
            return count = Math.round(count/this.reviews.length);
        }
        return count = this.reviews[0].review.average;
    }

    get computedReviews(): number {
        let count = 0;
        if(!this.reviews) return count;
        if(this.reviews.length >= 1) {
            for(const item of this.reviews) {
                count +=1
            }
            return count;
        }
        return count = 1;
    }
}