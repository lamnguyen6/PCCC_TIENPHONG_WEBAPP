import { CommonModule } from '@angular/common';
import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Swiper, { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-product-details-slider',
  templateUrl: './product-details-slider.component.html',
  styleUrls: ['./product-details-slider.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductDetailsSliderComponent implements OnInit, AfterViewInit {
  @Input('datasrc') datasrc: Array<any> = [];
  @ViewChild('mainSwiperRef', { static: true })
  protected _mainSwiperRef: ElementRef | undefined;
  mainSwiper?: Swiper;
  @ViewChild('pagingSwiperRef', { static: true })
  protected _pagingSwiperRef: ElementRef | undefined;
  pagingSwiper?: Swiper;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this._initMainSwiper();
    this._initPagingSwiper();
  }
  
  private _initMainSwiper() {
    const options: SwiperOptions = {
      pagination: false,
      slidesPerView: 1,
      loop: false,
    }
  
    const swiperEl = this._mainSwiperRef!.nativeElement;
    Object.assign(swiperEl, options);
  
    swiperEl.initialize();
    
    if (this.mainSwiper) this.mainSwiper.currentBreakpoint = false; // Breakpoint fixes
    this.mainSwiper = this._mainSwiperRef!.nativeElement.swiper;
  
    this.mainSwiper!.off('slideChange'); // Avoid multiple subscription, in case you wish to call the `_initSwiper()` multiple time
  
    this.mainSwiper!.on('slideChange', () => { // Any change subscription you wish
    });
  }
  private _initPagingSwiper() {
    const activeSlideCls = 'paging-btn-active';
    const options: SwiperOptions = {
      pagination: false,
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: false,
    }
  
    const swiperEl = this._pagingSwiperRef!.nativeElement;
    Object.assign(swiperEl, options);
  
    swiperEl.initialize();
    
    if (this.pagingSwiper) this.pagingSwiper.currentBreakpoint = false; // Breakpoint fixes
    this.pagingSwiper = this._pagingSwiperRef!.nativeElement.swiper;
    this.pagingSwiper?.slides[0].classList.add(activeSlideCls);
  
    this.pagingSwiper!.off('click'); // Avoid multiple subscription, in case you wish to call the `_initSwiper()` multiple time
    this.pagingSwiper!.on('click', swiper => { // Any change subscription you wish
      const activeIndex = swiper.activeIndex;
      const clickedIndex = swiper.clickedIndex;
      // set active slide for paging
      for (let i = 0; i < swiper.slides.length; i++) {
        if (i === clickedIndex) {
          swiper.slides[i].classList.add(activeSlideCls);
        } else {
          swiper.slides[i].classList.remove(activeSlideCls);
        }
      }
      swiper.activeIndex = clickedIndex;
      // set active slide for main
      this.mainSwiper?.slideTo(Number(clickedIndex));
    });
  }
}
