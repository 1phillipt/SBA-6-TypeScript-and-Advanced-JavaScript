import { Product } from "../models/Product.js";

export function calculateTax(price:number, tax:number): string{
    return "$" + price * tax/100;
}

