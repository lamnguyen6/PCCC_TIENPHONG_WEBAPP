import { Component, Input, OnInit } from '@angular/core';
import { CardItem } from './card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('dataItem') dataItem: any;
  constructor() { }

  ngOnInit(): void {
  }

}
