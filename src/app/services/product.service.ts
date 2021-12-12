import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { shopProductUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // products :Product[]=[
  // {id:1 ,name:'product1' ,description:'this is the first product',price:100,imgUrl:"https://i5.walmartimages.com/asr/ee65abd7-d342-44b6-8be5-7b82966cee82.c654820bcc121884f039812f34263cb6.jpeg" },
  // {id:2 ,name:'product2' ,description:'this is the first product',price:200 ,imgUrl:"https://i5.walmartimages.com/asr/ee65abd7-d342-44b6-8be5-7b82966cee82.c654820bcc121884f039812f34263cb6.jpeg"},
  // {id:3 ,name:'product3' ,description:'this is the first product',price:300,imgUrl:"https://i5.walmartimages.com/asr/ee65abd7-d342-44b6-8be5-7b82966cee82.c654820bcc121884f039812f34263cb6.jpeg"},
  // {id:4 ,name:'product4' ,description:'this is the first product',price:400,imgUrl:"https://i5.walmartimages.com/asr/ee65abd7-d342-44b6-8be5-7b82966cee82.c654820bcc121884f039812f34263cb6.jpeg"},
  // {id:5 ,name:'product5' ,description:'this is the first product',price:500,imgUrl:"https://i5.walmartimages.com/asr/ee65abd7-d342-44b6-8be5-7b82966cee82.c654820bcc121884f039812f34263cb6.jpeg"},
  // {id:6 ,name:'product6' ,description:'this is the first product',price:600,imgUrl:"https://i5.walmartimages.com/asr/ee65abd7-d342-44b6-8be5-7b82966cee82.c654820bcc121884f039812f34263cb6.jpeg"},
  // {id:7 ,name:'product7' ,description:'this is the first product',price:100,imgUrl:"https://i5.walmartimages.com/asr/ee65abd7-d342-44b6-8be5-7b82966cee82.c654820bcc121884f039812f34263cb6.jpeg"},
  // ]
  constructor( private http :HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(shopProductUrl);
  }
}
