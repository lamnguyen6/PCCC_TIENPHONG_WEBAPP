import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { LayoutPageModule } from '../layout-page/layout-page.module';
import { PipesModule } from '../share/pipes/pipes/pipes.module';
import { ShareModule } from '../share/share.module';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: HomePageComponent,
		data: { animation: 'Home' },
	},
];

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LayoutPageModule,
    PipesModule,
    ShareModule,
    HomeBannerComponent,
  ],
})
export class HomeModule { }
