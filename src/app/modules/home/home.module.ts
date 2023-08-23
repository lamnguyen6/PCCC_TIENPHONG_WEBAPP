import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { BevSwiperModule } from '../bev-swiper/bev-swiper.module';
import { FooterModule } from '../footer/footer.module';
import { FloatingContentModule } from '../floating-content/floating-content.module';
import { DirectivesModule } from '../directives/directives.module';

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
    HeaderModule,
    BevSwiperModule,
    FooterModule,
    DirectivesModule,
  ],
})
export class HomeModule { }
