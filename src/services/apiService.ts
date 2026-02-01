import { Product } from "../models/Product.js";

let url = "https://dummyjson.com/products?limit=10&skip=10&select=title,price,discountPercentage"

const products:Product.Product = null;

async  function fetchData(url:string) {
     try{
       const response = await fetch(url);
        if(!response.ok){
                throw new Error("network response was not ok");
        }
     data = await response.json();
     console.log(data);
    }catch(error){
        console.error("fetch error: ", error)
    }
}
fetchData(url);
console.log



