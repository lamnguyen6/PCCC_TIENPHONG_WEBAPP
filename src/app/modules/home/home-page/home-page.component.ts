import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SwiperItem } from '../../bev-swiper/bev-swiper.interface';
import { BevSwiperComponent } from '../../bev-swiper/bev-swiper.component';
import { ProductCard } from '../../product/product';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  @ViewChild(BevSwiperComponent) mainBannerCmp: BevSwiperComponent | undefined;
  @ViewChild('animatedElement', { static: false }) animatedElement!: ElementRef;

  mainBanners: Array<SwiperItem> = [
    {
      src: '/assets/images/banner/banner1.png',
      link: '#'
    },
    {
      src: '/assets/images/banner/banner2.png',
      link: '#'
    },
    {
      src: '/assets/images/banner/banner3.png',
      link: '#'
    },
    {
      src: '/assets/images/banner/banner4.png',
      link: '#'
    },
  ];
  productList: Array<ProductCard> = [];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productList = this.productService.searchProduct('').map(item => this.productService._productcard(item));
  }
  ngAfterViewInit() {
    // this.mainBannerCmp!.toggleComponentActive();
  }

  animateIdleWithSpeed(element: HTMLElement, speed: number) {
    // Adjust position based on scroll speed
    const xMovement = Math.sin(speed / 100) * 20; // Adjust factor as needed
    const yMovement = Math.cos(speed / 100) * 20; // Adjust factor as needed

    console.log(`animateIdleWithSpeed`, speed, xMovement, yMovement);

    element.style.left = `calc(50% + ${xMovement}px)`;
    element.style.top = `calc(50% + ${yMovement}px)`;
  }
}
