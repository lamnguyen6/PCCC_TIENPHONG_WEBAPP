import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BevModule } from './bev/bev.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BevModule,
  ],
  exports: [
    BevModule,
  ]
})
export class AuthorModule { }
