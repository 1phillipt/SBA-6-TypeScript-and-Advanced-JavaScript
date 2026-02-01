import { Product } from "../models/Product.js";

export function calculateTax(price:number, tax:number): number{
    return   price * tax/100;
}

