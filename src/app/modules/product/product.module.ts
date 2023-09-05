import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsPageComponent } from './product-details-page/product-details-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageModule } from '../layout-page/layout-page.module';
import { MatIconModule } from '@angular/material/icon';
import { ProductDetailsSliderComponent } from './product-details-slider/product-details-slider.component';

const routes: Routes = [
	{
		path: '',
		component: ProductPageComponent,
		data: { animation: 'Product' },
	},
	{
		path: ':id',
		component: ProductDetailsPageComponent,
		data: { animation: 'Product' },
	},
];

@NgModule({
  declarations: [
    ProductPageComponent,
    ProductCardComponent,
    ProductDetailsPageComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatIconModule,
    LayoutPageModule,
    ProductDetailsSliderComponent,
  ],
  exports: [
    ProductCardComponent,
  ]
})
export class ProductModule { }
