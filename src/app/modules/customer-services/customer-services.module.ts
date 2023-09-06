import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerServicesPageComponent } from './customer-services-page/customer-services-page.component';
import { CustomerServiceDetailsPageComponent } from './customer-service-details-page/customer-service-details-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageModule } from '../layout-page/layout-page.module';
import { ShareModule } from '../share/share.module';
import { MatIconModule } from '@angular/material/icon';

const routes: Routes = [
	{
		path: '',
		component: CustomerServicesPageComponent,
		data: { animation: 'CS' },
	},
	{
		path: ':id',
		component: CustomerServiceDetailsPageComponent,
		data: { animation: 'CS' },
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
	MatIconModule,
  ]
})
export class CustomerServicesModule { }
