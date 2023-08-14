import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessButtonComponent } from './access-button.component';
import {MatTooltipModule} from '@angular/material/tooltip'



@NgModule({
  declarations: [
    AccessButtonComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
  ],
  exports: [
    AccessButtonComponent,
  ]
})
export class AccessButtonModule { }
