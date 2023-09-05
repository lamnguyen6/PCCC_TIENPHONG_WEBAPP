import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductCard } from '../../product/product';
import { ProductService } from '../../product/product.service';
import { CustomerServicesService } from '../../customer-services/customer-services.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  @ViewChild('animatedElement', { static: false }) animatedElement!: ElementRef;
  productList: Array<ProductCard> = [];
  sideMenu: Array<any> = [];

  constructor(
    private productService: ProductService,
    private csService: CustomerServicesService,
  ) { }

  ngOnInit(): void {
    this.sideMenu = this.productService.getSideMenuList().concat(this.csService.getSideMenuList());
    this.productList = this.productService.searchProduct('').map(item => this.productService._productcard(item));
  }
  ngAfterViewInit() {
  }

  animateIdleWithSpeed(element: HTMLElement, speed: number) {
    // Adjust position based on scroll speed
    const xMovement = Math.sin(speed / 100) * 20; // Adjust factor as needed
    const yMovement = Math.cos(speed / 100) * 20; // Adjust factor as needed

    element.style.left = `calc(50% + ${xMovement}px)`;
    element.style.top = `calc(50% + ${yMovement}px)`;
  }
}
