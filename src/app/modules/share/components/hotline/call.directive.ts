import { Directive, HostListener, Input } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { app } from '../../app.utils';

@Directive({
  selector: '[appCall]'
})
export class CallDirective {
  @Input('appCall') call: string = 'hotline';
  @Input('copyToClipBoard') copyToClipBoard: boolean = false;
  @HostListener('click', ['$event']) onClick(e: any) {
    console.log(`yo`);
    if (this.copyToClipBoard == true) {
      this.helper.copyToClipBoard(this.hotline);
    }
    const simulatedLink = document.createElement('a');
    simulatedLink.setAttribute('href', `tel:${ this.hotline }`);
    const clickEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    simulatedLink.addEventListener('click', function () {
      this.remove();
    });
    simulatedLink.dispatchEvent(clickEvent);
  }
  hotline: string;
  constructor(
    private readonly helper: HelperService,
  ) {
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

}
