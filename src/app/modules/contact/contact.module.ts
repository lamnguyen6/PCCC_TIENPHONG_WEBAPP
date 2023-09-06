import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMapComponent } from './contact-map/contact-map.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { FormModule } from '../form/form.module';
import { MatIconModule } from '@angular/material/icon';
import { LayoutPageModule } from '../layout-page/layout-page.module';
import { ShareModule } from '../share/share.module';

const routes: Routes = [
  {
    path: '',
    component: ContactPageComponent,
    data: { animation: 'Contact' }
  }
];

@NgModule({
  declarations: [
    ContactMapComponent,
    ContactPageComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormModule,
    MatIconModule,
    LayoutPageModule,
    ShareModule,
  ],
})
export class ContactModule { }
