import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductCard } from '../product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  productList: Array<ProductCard> = [];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productList = this.productService.searchProduct('').map(item => this.productService._productcard(item));
  }
}
