import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BevSwiperComponent } from './bev-swiper.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';

@NgModule({
  declarations: [
    BevSwiperComponent,
  ],
  imports: [
    CommonModule,
    MdbCarouselModule,
  ],
  exports: [
    BevSwiperComponent,
  ],
})
export class BevSwiperModule { }
