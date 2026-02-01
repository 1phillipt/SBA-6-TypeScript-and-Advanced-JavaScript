

export class Product {
  id: number;
  title: string;
  price: number;
  discountPercentage:number;

  constructor(id:number,title:string,  price:number,discountPercentage:number){
    this.title = title;
    this.id =id;
    this.price=price;
    this.discountPercentage=discountPercentage;
  }
 displayDetails(): string {
  return `Product{
    id: ${this.id},
    name: ${this.title},
    price: ${this.price},
    discount: ${this.discountPercentage}
  }`;
}


  getPriceWithDiscount():number{
    return this.price - (this.price * this.discountPercentage/100);
  }

}
