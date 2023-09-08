import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeBannerComponent implements OnInit, AfterViewInit {
  datasrc: Array<any> = [
    {
      src: '/assets/images/banner/banner1.png',
      name: '',
      link: '#'
    },
    {
      src: '/assets/images/banner/banner2.png',
      name: '',
      link: '#',
    },
    {
      src: '/assets/images/banner/banner3.png',
      name: '',
      link: '#',
    },
    {
      src: '/assets/images/banner/banner4.png',
      name: '',
      link: '#',
    },
  ];
  @ViewChild('mainSwiperRef', { static: false })
  protected _mainSwiperRef: ElementRef | undefined;
  mainSwiper?: Swiper;
  constructor() { }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this._init();
  }
  private _init() {
    const options: SwiperOptions = {
      pagination: {
        clickable: true
      },
      slidesPerView: 'auto',
      loop: true,
      autoplay: {
        delay: 3000,
      },
      speed: 500,
      injectStyles: [
        `
          :host .swiper-pagination-bullet {
            background: var(--color-primary);
          }
        `,
      ],
    }
  
    const swiperEl = this._mainSwiperRef!.nativeElement;
    Object.assign(swiperEl, options);
  
    swiperEl.initialize();
    
    if (this.mainSwiper) this.mainSwiper.currentBreakpoint = false; // Breakpoint fixes
    this.mainSwiper = this._mainSwiperRef!.nativeElement.swiper;
  }
}
