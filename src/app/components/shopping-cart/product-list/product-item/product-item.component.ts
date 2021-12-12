import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MessengerService } from 'src/app/services/messenger.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!:Product;
  addedToWishlist  : boolean = false;

  constructor(
    private msgServ:MessengerService,
    private cartServ :CartService,
    private wishlistServ:WishlistService
    ) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.cartServ.addProductToCart(this.productItem).subscribe(() =>{
      this.msgServ.sendMsg(this.productItem);
    })
  }

 handleAddToWishlist(){
  this.wishlistServ.addToWishlist(this.productItem.id).subscribe(() =>{
    this.addedToWishlist = true;
  })
 }

 handleRomoveFromWishlist(){
  this.wishlistServ.removeFromWishlist(this.productItem.id).subscribe(() =>{
    this.addedToWishlist = false;
  })

 }

 showProductDetails(){
   
 }

}

