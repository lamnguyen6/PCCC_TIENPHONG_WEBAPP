import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'trang-chu',
		loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
	},
	{
		path: 'dich-vu',
		loadChildren: () => import('./modules/customer-services/customer-services.module').then(m => m.CustomerServicesModule),
	},
	{
		path: 'thiet-bi-pccc',
		loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule),
	},
	{
		path: 'gioi-thieu',
		loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule),
	},
	{
		path: 'lien-he',
		loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule),
	},
	{
		path: 'cam-nang-pccc',
		loadChildren: () => import('./modules/handbook/handbook.module').then(m => m.HandbookModule),
	},
	// {path: '404', component: NotfoundComponent, data: {animation: 'Restrict'}},
	// {path: '500', component: MaintainedComponent, data: {animation: 'Restrict'}},
	{path: '', redirectTo: '/trang-chu', pathMatch: 'full'},
	// {path: '**', redirectTo: '/404'}, // must be the end of this list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
