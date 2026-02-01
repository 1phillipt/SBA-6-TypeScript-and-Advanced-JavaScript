import { Product } from "./src/models/Product.js";
import { fetchData } from "./src/services/apiService.js";
let url = "https://dummyjson.com/products?limit=10&skip=10&select=title,price,discountPercentage";
try{
     await fetchData(url)
} catch(Error){
console.log(Error);
    
}

