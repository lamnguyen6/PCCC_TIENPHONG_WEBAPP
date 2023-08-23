import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'trang-chu',
		loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
	},
	{
		path: 'gioi-thieu',
		loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule),
	},
	{
		path: 'lien-he',
		loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule),
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
