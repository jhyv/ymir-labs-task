import { BaseModel } from "./base.model";


export interface Category extends BaseModel {
    name: string;
    image: string;
}

export interface Product extends BaseModel {
    title: string;
    price: number;
    description: string;
    images?: string[];
    category?: Category;
}