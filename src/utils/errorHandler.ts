
export class isConnectionOk extends Error{
    constructor(messsage:string){
        super(messsage)
    }
}
export class isProductListEmpty extends Error {
  constructor(message:string){
    super(message);
  }
}