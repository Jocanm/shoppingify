import { IPurchase } from "./pruchase.interface";

export interface IActivePurchase{
    id: string;
    userId: string;
    purchaseId: string;
    createdAt: string;
    updatedAt: string;

    purchase: IPurchase;
}