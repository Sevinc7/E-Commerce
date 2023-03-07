import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../cart-service/cart.service';
import { Iproduct } from './iproduct';
import { PREPARED_PRODUCTS } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products = PREPARED_PRODUCTS;

  constructor(private cartService: CartService) {}

  addToCart(product: Iproduct): void {
    this.cartService.addToCart(product);
    window.alert(product.name + " added to cart!")
  }
}
