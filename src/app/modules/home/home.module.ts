import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { BevSwiperModule } from '../bev-swiper/bev-swiper.module';
import { LayoutPageModule } from '../layout-page/layout-page.module';

const routes: Routes = [
	{
		path: '',
		component: HomePageComponent,
		data: { animation: 'Home' },
	}
];

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    BevSwiperModule,
    LayoutPageModule,
  ],
})
export class HomeModule { }
