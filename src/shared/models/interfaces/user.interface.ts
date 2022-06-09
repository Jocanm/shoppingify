import { ICategory } from "./category.interface";

export interface IUser {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
    categories: ICategory[];
    purchases: any[];
    activePurchase: any;
}