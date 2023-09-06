import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import {MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ContactModule } from '../contact/contact.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    ShareModule,
  ],
  exports: [
    FooterComponent,
  ]
})
export class FooterModule { }
