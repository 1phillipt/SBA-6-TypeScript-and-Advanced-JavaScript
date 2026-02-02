import { Product } from "./models/Product.js";
import { fetchData } from "./services/apiService.js";
import { isConnectionOk, isProductListEmpty } from "./utils/errorHandler.js";

import { calculateDiscount } from "./utils/discountCalculator.js";
import { calculateTax } from "./utils/taxCalculator.js";

let url =
  "https://dummyjson.com/products?limit=10&skip=10&select=title,price,discountPercentage";

let products: Product[] = [];
let newPriceWithTaxAndDiscount: Product[] = [];

async function fetchAllData(){
  try {
    products = await fetchData(url);

    newPriceWithTaxAndDiscount = products.map((product) => {
      let priceAferTaxAndDiscount: number =
        product.price -
        calculateDiscount(product.price, product.discountPercentage) +
        calculateTax(product.price, 7);

      return new Product(
        product.id,
        product.title,
        priceAferTaxAndDiscount,
        product.discountPercentage,
      );
    });
    
  } catch (Error) {
      new isConnectionOk("please see the connection to url");
  }
}
await fetchAllData();

newPriceWithTaxAndDiscount.forEach(element => {
  console.log(element)
});
