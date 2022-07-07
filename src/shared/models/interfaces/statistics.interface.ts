import { ICategory } from "./category.interface";
import { IProduct } from "./product.interface";

export interface IProductStatistic {
    count: number;
    percentage: string;
    product: IProduct;
}

export interface ICategoryStatistic {
    count: number;
    percentage: string;
    category: ICategory;
}

export interface IStatistic {
    topProductsList: IProductStatistic[];
    topCategoriesList: ICategoryStatistic[];
}