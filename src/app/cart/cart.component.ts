import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart-service/cart.service';
import { ICartItem } from '../cart-service/icartitem';
import { Iproduct } from '../product/iproduct';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: ICartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
  }

  getTotalPrice(): number{
    return Math.round(this.cartService.calculatePrice() * 100) / 100;
  }

  decreaseAmount(cartItem: ICartItem) {
    if(cartItem.count > 0) {
      cartItem.count -= 1;
    }

    if(cartItem.count == 0) {
      this.cartItems = this.cartItems.filter(x => x.product !== cartItem.product);
    }
  }

  increaseAmount(cartItem: ICartItem) {
    cartItem.count += 1;
  }

  emptyCart(): void {
    this.cartItems = this.cartService.clearCart();
  }
}
