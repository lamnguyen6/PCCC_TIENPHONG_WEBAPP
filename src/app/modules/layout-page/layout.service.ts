import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private showSideMenuMobileObs: BehaviorSubject<any> = new BehaviorSubject(null);
	showSideMenuMobile$ = this.showSideMenuMobileObs.asObservable();
  constructor() {}

  toggleSideMenuMobile(isOpen: boolean = true) {
    this.showSideMenuMobileObs.next(isOpen);
  }
  getFlagShowSideMenuMobile() {
    return this.showSideMenuMobileObs.value;
  }
}
