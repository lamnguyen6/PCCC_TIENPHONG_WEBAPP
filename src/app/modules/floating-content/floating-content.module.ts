import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessButtonModule } from './access-button/access-button.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccessButtonModule,
  ],
  exports: [
    AccessButtonModule,
  ]
})
export class FloatingContentModule { }
