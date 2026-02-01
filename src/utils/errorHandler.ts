
export class isConnectionOk extends Error{
    
}
export class isProductListEmpty extends Error {
  constructor(message:string){
    super(message);
  }
}