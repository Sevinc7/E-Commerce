import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproduct } from '../product/iproduct';
import { PREPARED_PRODUCTS } from '../product/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Iproduct | undefined = undefined;
  id: number = 0;

  constructor (private route: ActivatedRoute){}
 
  ngOnInit(): void {
    this.route.params.subscribe( (params: Params) => {
      this.id = params['id'];
      this.product = PREPARED_PRODUCTS.find(x => x.id == this.id);
      console.log(this.product);
    });
  }
}