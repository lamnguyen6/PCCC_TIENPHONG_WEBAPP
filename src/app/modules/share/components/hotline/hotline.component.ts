import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { app } from '../../app.utils';

@Component({
  selector: 'app-hotline',
  templateUrl: './hotline.component.html',
  styleUrls: ['./hotline.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HotlineComponent implements OnInit {
  @Input('elType') elType: string = '';
  @Input('call') call: string = 'hotline';
  @Input('copyToClipBoard') copyToClipBoard: boolean = false;
  hotline = '';
  constructor() { }

  ngOnInit(): void {
    switch (this.call) {
      case 'hotline':
        this.hotline = app.call.hotline;
        break;
      case 'support':
        this.hotline = app.call.support;
        break;
    
      default:
        this.hotline = app.call.hotline;
        break;
    }
  }
  xxx() {
    console.log(`xxx`);
  }
}
