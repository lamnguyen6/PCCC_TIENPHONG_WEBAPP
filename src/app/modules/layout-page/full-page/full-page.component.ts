import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit } from '@angular/core';
import { app } from '../../share/app.utils';
import { Observable, delay, distinctUntilChanged, exhaustMap, filter, of, share, shareReplay, switchMap, tap } from 'rxjs';
import { LayoutService } from '../layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-full-page',
  templateUrl: './full-page.component.html',
  styleUrls: ['./full-page.component.scss']
})
export class FullPageComponent implements OnInit, AfterViewInit, OnDestroy {
  appFB: string = app.social.fb;
  appZalo: string = `https://zalo.me/g/${ app.call.hotline }`;
  stickyHeader: boolean = false;
  showSideMenuMobile: any;
  showSideMenuMobile$: any;
  protected pageH: any;
  protected viewH = window.innerHeight;
  @HostListener('window:scroll', ['$event']) onscroll() {
      this.stickyHeader = this._stickyheader();
  }
  constructor(
    private el: ElementRef,
    private layoutService: LayoutService,
    private router: Router,
  ) { }
  ngOnDestroy(): void {
    this.showSideMenuMobile$ && this.showSideMenuMobile$.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.pageH = Number(this.el.nativeElement.querySelector('.layout').offsetHeight) || window.innerHeight;
  }
  ngOnInit(): void {
    this.showSideMenuMobile$ = this.layoutService.showSideMenuMobile$
      .pipe(
        tap(x => console.log(`tap`, x, app.isDevice)),
        filter(x => app.isDevice && x !== null && x !== undefined && x !== this.showSideMenuMobile),
        exhaustMap(x => of(x)),
      )
      .subscribe(
        res => {
          console.log(`res`, res);
          this.showSideMenuMobile = res;
        },
      );
  }
  private _stickyheader():boolean {
    const margin = 700;
    return this.pageH >= this.viewH + margin && window.scrollY > 200;
  }
  routingMobileOnClick(route: string) {
    const currouting = this.router.url ? this.router.url : '/trang-chu';
    if (currouting === route) return;
    this.layoutService.toggleSideMenuMobile(false);
    this.router.navigate([route]);
  }
}
