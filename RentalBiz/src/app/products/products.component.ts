import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService) { }

  products: any;

  ngOnInit() {
    debugger;
    this.productService.getProducts().subscribe(res => {
      this.products = res;
    });
  }


}
