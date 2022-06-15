import { IProduct } from "./";

export interface ICategory {
    id: string;
    name: string;
    userId: string;
    products: IProduct[];
}