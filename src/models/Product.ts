

export class Product {
  name: string;
  id: number;
  price: number;
  discount:number;

  constructor(name:string, id:number, price:number,discount:number){
    this.name = name;
    this.id =id;
    this.price=price;
    this.discount=discount;
  }
 displayDetails(): string {
  return `Product{
    id: ${this.id},
    name: ${this.name},
    price: ${this.price},
    discount: ${this.discount}
  }`;
}


  getPriceWithDiscount():number{
    return this.price - this.price * this.discount;
  }

}
