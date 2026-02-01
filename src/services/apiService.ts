import { Product } from "../models/Product.js";


async function fetchData(url: string): Promise<Product[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("network response was not ok");
  }
  const data = await response.json();
  const products = await data.products.map(
    (product:Product) =>
      new Product(
        product.id,
        product.title,
        product.price,
        product.discountPercentage,
      ),
  );
  console.log(products);
  return products;
}


export {fetchData}