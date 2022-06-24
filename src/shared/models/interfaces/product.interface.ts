import { ICategory } from "./category.interface";

export interface IProduct {
    id: string;
    name: string;
    categoryId: string;
    image?: string;
    note?: string;
    createdAt: string;
    updatedAt: string;
    category: ICategory;
}

export interface IPurchasedProduct{
    productId: string;
    amount: number;
}