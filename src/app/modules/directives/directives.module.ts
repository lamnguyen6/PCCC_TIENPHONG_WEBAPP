import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdleOnScrollDirective } from 'src/app/directives/idle-on-scroll.directive';



@NgModule({
  declarations: [
    IdleOnScrollDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IdleOnScrollDirective,
  ]
})
export class DirectivesModule { }
