import { IProduct } from "./product.interface";

export type PurchaseStatus = "pending" | "completed" | "cancelled";

export interface IPurchase {
    id: string;
    userId: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    state: PurchaseStatus;

    products: IPurchasedProductV2[];
}

export interface IPurchasedProductV2 {
    id: string;
    productId: string;
    quantity: number;
    purchaseId: string;
    createdAt: string;
    updatedAt: string;
    done: boolean;
    product: IProduct;
}