import { Product } from "../models/Product.js";


export function calculateDiscount(discount: number,price:number):string {

return "$" + discount/100*price;

}
