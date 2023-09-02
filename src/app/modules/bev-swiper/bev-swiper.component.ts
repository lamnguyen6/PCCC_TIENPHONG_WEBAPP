import { Component, Input, OnInit } from '@angular/core';
import { SwiperItem } from './bev-swiper.interface';

@Component({
  selector: 'app-bev-swiper',
  templateUrl: './bev-swiper.component.html',
  styleUrls: ['./bev-swiper.component.scss']
})
export class BevSwiperComponent implements OnInit {
  @Input('src') datasrc: Array<SwiperItem> = [];
  @Input('config') config: any;

  componentActive: boolean;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
  }
  toggleComponentActive(active: boolean = true) {
    this.componentActive = active;
    if (active) {
    }
  }
}
