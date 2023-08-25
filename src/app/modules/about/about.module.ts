import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './about-page/about-page.component';
import { FooterModule } from '../footer/footer.module';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { LayoutPageModule } from '../layout-page/layout-page.module';

const routes: Routes = [
	{
		path: '',
		component: AboutPageComponent,
		data: { animation: 'About' },
	}
];

@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LayoutPageModule,
  ]
})
export class AboutModule { }
