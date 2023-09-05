import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerServicesPageComponent } from './customer-services-page/customer-services-page.component';
import { CustomerServiceDetailsPageComponent } from './customer-service-details-page/customer-service-details-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageModule } from '../layout-page/layout-page.module';
import { ShareModule } from '../share/share.module';

const routes: Routes = [
	{
		path: '',
		component: CustomerServicesPageComponent,
		data: { animation: 'Product' },
	},
	{
		path: ':id',
		component: CustomerServiceDetailsPageComponent,
		data: { animation: 'Product' },
	},
];

@NgModule({
  declarations: [
    CustomerServicesPageComponent,
    CustomerServiceDetailsPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LayoutPageModule,
	ShareModule,
  ]
})
export class CustomerServicesModule { }
