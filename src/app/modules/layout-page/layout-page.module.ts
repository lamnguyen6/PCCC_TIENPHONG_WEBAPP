import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageComponent } from './full-page/full-page.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';
import { FloatingContentModule } from '../floating-content/floating-content.module';



@NgModule({
  declarations: [
    FullPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    FloatingContentModule,
  ],
  exports: [
    FullPageComponent
  ]
})
export class LayoutPageModule { }
