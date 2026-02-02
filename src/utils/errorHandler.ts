
 class isConnectionOk extends Error{
    constructor(messsage:string){
        super(messsage)
    }
}
 class isProductListEmpty extends Error {
  constructor(message:string){
    super(message);
  }
}

export {isConnectionOk,isProductListEmpty};