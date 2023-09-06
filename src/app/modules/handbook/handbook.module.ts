import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HandbookPageComponent } from './handbook-page/handbook-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageModule } from '../layout-page/layout-page.module';
import {MatExpansionModule} from '@angular/material/expansion'
import { ShareModule } from '../share/share.module';
import { HandbookDetailsPageComponent } from './handbook-details-page/handbook-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: HandbookPageComponent,
    data: { animation: 'Handbook' }
  },
  {
    path: ':id',
    component: HandbookDetailsPageComponent,
    data: { animation: 'Handbook' }
  },
];

@NgModule({
  declarations: [
    HandbookPageComponent,
    HandbookDetailsPageComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LayoutPageModule,
    MatExpansionModule,
    ShareModule,
  ]
})
export class HandbookModule { }
