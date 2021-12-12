import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems :CartItem[] =[];
   
  
   // {id:1,productId:2 , productName:'test2', qty:5 ,price:100},
    // {id:2,productId:1 ,productName:'test1',qty:4 ,price:50},
    // {id:3,productId:4 ,productName:'test4',qty:2 ,price:75},
    // {id:4,productId:3 ,productName:'test3',qty:3 ,price:125},

  cartTotal =0;
  constructor(
          private msgServ:MessengerService,
          private cartServ:CartService
          ) { }
          

  ngOnInit(): void {
    this.handleSubscription();
    this.loadCartItems()
  }

  handleSubscription(){
    this.msgServ.getMsg().subscribe((product: Product|any) =>{
     this.loadCartItems();
    })
  }

  loadCartItems(){
    this.cartServ.getCartItems().subscribe((items :CartItem[]) =>{
      this.cartItems= items;
      this.calcCartTotal()
    })
  }

 
  calcCartTotal(){
    this.cartTotal=0;
    this.cartItems.forEach(item =>{
      this.cartTotal += (item.qty * item.price)
    })
  }

}
