import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HotlineComponent } from './hotline/hotline.component';
import { CallDirective } from './hotline/call.directive';



@NgModule({
  declarations: [
    CardComponent,
    HotlineComponent,
    CallDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
  ],
  exports: [
    CardComponent,
    HotlineComponent,
    CallDirective,
  ]
})
export class ComponentsModule { }
