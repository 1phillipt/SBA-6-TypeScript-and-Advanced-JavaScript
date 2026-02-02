import { Product } from "../models/Product.js";


export function calculateDiscount(price:number,discount: number):number {

return (discount/100)*price;

}
