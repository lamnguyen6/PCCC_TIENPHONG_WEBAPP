import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SwiperItem } from '../../bev-swiper/bev-swiper.interface';
import { BevSwiperComponent } from '../../bev-swiper/bev-swiper.component';

export interface ProductCard {
  title: string;
  price: string;
  img: string;
  badges: Array<string>;
}

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
      src: '/assets/images/banner/home-banner1.png',
      link: '#'
    },
    {
      src: '/assets/images/banner/home-banner2.png',
      link: '#'
    },
    {
      src: '/assets/images/banner/home-banner3.png',
      link: '#'
    },
  ];
  productList: Array<ProductCard> = [
    {
      title: 'Bình Chữa Cháy CO2 - MT3',
      price: 'Liên hệ',
      img: '/assets/images/products/binhcuuhoaCO2-MT3.png',
      badges: []
    },
    {
      title: 'Bộ tiêu lệnh chữa cháy',
      price: 'Liên hệ',
      img: '/assets/images/products/bo-tieu-lenh-chua-chay.png',
      badges: []
    },
    {
      title: 'Camera chống trộm - Foscam-FI9804W',
      price: 'Liên hệ',
      img: '/assets/images/products/camera-chong-trom-ngoai-troi-IP-Foscam-FI9804W.png',
      badges: []
    },
    {
      title: 'Máy Bơm Tohatsu-V20DS',
      price: 'Liên hệ',
      img: '/assets/images/products/may-bom-pccc-tohatsu-V20DS.png',
      badges: []
    },
    {
      title: 'Thiết bị cứu hỏa Woosung',
      price: 'Liên hệ',
      img: '/assets/images/products/thiet-bi-cuu-hoa-woosung.png',
      badges: []
    },
  ];

  constructor(
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.mainBannerCmp!.toggleComponentActive();
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
