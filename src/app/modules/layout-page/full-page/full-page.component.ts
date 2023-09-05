import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.scss']
})
export class FullPageComponent implements OnInit, AfterViewInit {
  stickyHeader: boolean = false;
  protected pageH: any;
  protected viewH = window.innerHeight;
  @HostListener('window:scroll', ['$event']) onscroll() {
    this.stickyHeader = this._stickyheader();
  }
  constructor(
    private el: ElementRef,
  ) { }
  ngAfterViewInit(): void {
    this.pageH = Number(this.el.nativeElement.querySelector('.layout').offsetHeight) || window.innerHeight;
    this.stickyHeader = this._stickyheader();
  }
  ngOnInit(): void {
  }
  private _stickyheader():boolean {
    const margin = 700;
    return this.pageH >= this.viewH + margin && window.scrollY > 200;
  }
}
