export class Product {
    id;
    title;
    price;
    discountPercentage;
    constructor(id, title, price, discountPercentage) {
        this.title = title;
        this.id = id;
        this.price = price;
        this.discountPercentage = discountPercentage;
    }
    displayDetails() {
        return `Product{
    id: ${this.id},
    name: ${this.title},
    price: ${this.price},
    discount: ${this.discountPercentage}
  }`;
    }
    getPriceWithDiscount() {
        return this.price - (this.price * this.discountPercentage / 100);
    }
}
//# sourceMappingURL=Product.js.map