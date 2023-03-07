import { Injectable } from '@angular/core';
import { Iproduct } from '../product/iproduct';
import { ICartItem } from './icartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: ICartItem[] = [];

  constructor() {}
  
  addToCart(product: Iproduct): void {
    this.items.push({product: product, count: 1});
  }
  
  getItems(): ICartItem[] {
    return this.items;
  }
  
  clearCart(): ICartItem[] {
    this.items = [];
    return this.items;
  }

  calculatePrice(): number {
    let totalPrice = 0;
    this.items.forEach(item => totalPrice += item.product.price * item.count);
    return totalPrice;
  }
}
