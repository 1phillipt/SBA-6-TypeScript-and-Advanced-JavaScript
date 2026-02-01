// async function fetchDataFromUrl(){
//     const response = await fetch("https://dummyjson.com/products?sortBy=title&order=asc");
// }
export class Product {
    name;
    id;
    price;
    discount;
    constructor(name, id, price, discount) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.discount = discount;
    }
    disPlayDetails() {
        return this; //fix this
    }
    getPriceWithDiscount() {
        return this.price + (this.price * this.discount);
    }
}
//# sourceMappingURL=Product.js.map