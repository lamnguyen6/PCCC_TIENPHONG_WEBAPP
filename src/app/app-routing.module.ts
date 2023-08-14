import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
		path: '',
		redirectTo: '/trang-chu',
		pathMatch: 'full'
	},
  {
		path: 'trang-chu',
		loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
	},
  // {path: '404', component: NotfoundComponent, data: {animation: 'Restrict'}},
  // {path: '500', component: MaintainedComponent, data: {animation: 'Restrict'}},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  // {path: '**', redirectTo: '/404'}, // must be the end of this list
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
