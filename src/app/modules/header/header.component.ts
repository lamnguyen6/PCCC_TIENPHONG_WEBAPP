import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout-page/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  toggleMobileMenuFlag: boolean = false;

  constructor(
    private readonly layoutService: LayoutService,
  ) { }

  ngOnInit(): void {
  }
  toggleMobileMenuOnClick() {
    console.log(`toggleMobileMenuOnClick`);
    let isOpen = this.layoutService.getFlagShowSideMenuMobile();
    if (isOpen == null || isOpen == undefined) isOpen = false;
    this.layoutService.toggleSideMenuMobile(!isOpen);
  }
}
