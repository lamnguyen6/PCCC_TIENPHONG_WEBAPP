import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupByPipe } from 'src/app/pipes/group-by.pipe';



@NgModule({
  declarations: [
    GroupByPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GroupByPipe,
  ]
})
export class PipesModule { }
