import { ProductModel } from "./product.model";

type Data = ProductModel[] | ProductModel;
type Error = string;

export type ApiResponse = Data | Error;