import { ImagesModel, Product, ProductModel } from "./product.model";

export class SimplifiedProduct implements Partial<Product> {
    public id!: string;
    public name!: string;
    public price!: number;
    public slider!: ImagesModel[];
    public createdAt!: Date;
    public updatedAt!: Date;

    constructor(
        {
            id,
            name,
            price,
            slider,
            createdAt,
            updatedAt
        }: ProductModel
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.slider = slider;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}