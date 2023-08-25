import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.scss']
})
export class FullPageComponent implements OnInit {
  stickyHeader: boolean = false;
  @HostListener('window:scroll', ['$event']) onscroll() {
    this.stickyHeader = window.scrollY > 120;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
