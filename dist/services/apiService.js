import { Product } from "../models/Product.js";
import { isConnectionOk } from "../utils/errorHandler.js";
async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new isConnectionOk("url connection error");
    }
    const data = await response.json();
    const products = await data.products.map((product) => new Product(product.id, product.title, product.price, product.discountPercentage));
    return products;
}
export { fetchData };
//# sourceMappingURL=apiService.js.map