import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorModule } from './author/author.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthorModule,
  ],
  exports: [
    AuthorModule,
  ]
})
export class InitModule { }
