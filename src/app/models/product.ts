export class Product {
    id!:number;
    name!:string;
    description!:string;
    price!:number;
    imgUrl?:string;

    constructor(id:number , name :string , description :'' , price :0 , imgUrl :"https://i5.walmartimages.com/asr/ee65abd7-d342-44b6-8be5-7b82966cee82.c654820bcc121884f039812f34263cb6.jpeg" ){
        this.id=id;
        this.name=name;
        this.description=description;
        this.price=price;
        this.imgUrl=imgUrl;
    }
}
