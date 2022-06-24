import { IProduct } from "./product.interface";

export type PurchaseStatus = "pending" | "completed" | "cancelled";

export interface IPurchase {
    id: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    state: string;
    status: PurchaseStatus;

    products: IPurchasedProductV2[];
}

export interface IPurchasedProductV2 {
    id: string;
    productId: string;
    amount: number;
    purchaseId: string;
    createdAt: string;
    updatedAt: string;

    product: IProduct;
}