import { Product } from "./product";

export class CartItem {
    id?:number;
    productName!:string;
    productId!:number;
    qty!:number;
    price!:number;

    constructor(id:number , product:Product , qty=1){
        this.id = id;
        this.productId =product.id;
        this.productName = product.name;
        this.price =product.price;
        this.qty = qty;
    }
}
