import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageComponent } from './full-page/full-page.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [
    FullPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
  ],
  exports: [
    FullPageComponent
  ]
})
export class LayoutPageModule { }
