import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.scss']
})
export class FullPageComponent implements OnInit {
  stickyHeader: boolean = false;
  @HostListener('window:scroll', ['$event']) onscroll() {
    const viewH = Number(window.innerHeight);
    const margin = 600;
    let pageH = Number(this.el.nativeElement.querySelector('.layout').offsetHeight) || viewH;
    this.stickyHeader = pageH >= viewH + margin && window.scrollY > 200;
  }
  constructor(
    private el: ElementRef,
  ) { }

  ngOnInit(): void {
    console.log(`window`, window.innerHeight);
  }

}
