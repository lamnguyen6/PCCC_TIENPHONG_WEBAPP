import { trigger, transition, query, style, group, animate, keyframes } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {register} from 'swiper/element/bundle';
import { app } from './modules/share/app.utils';

export const appear = trigger('routeAnimations', [
	transition('* <=> *', [
		query(':enter, :leave', [
			style({
				position: 'absolute',
				zIndex: -4,
				top: 0,
				left: 0,
				width: '100%',
				opacity: 0
			})
		], { optional: true }),
		group([
			query(':enter', [
				animate('0.5s 0.6s ease', keyframes([
					style({ opacity: 0, zIndex: -4 }),
					style({ opacity: 1, zIndex: 1 }),
				]))
			], { optional: true }),
			query(':leave', [
				animate('0.7s ease', keyframes([
					style({ opacity: 1, zIndex: -4 }),
					style({ opacity: 0, zIndex: 1 }),
				]))
			], { optional: true })
		])
	])
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [appear]
})
export class AppComponent {
  constructor() {
	// swiper element v9 register
	register();
	app.isDevice = navigator.userAgent.match(/Android/i)
	|| navigator.userAgent.match(/webOS/i)
	|| navigator.userAgent.match(/iPhone/i)
	|| navigator.userAgent.match(/iPad/i)
	|| navigator.userAgent.match(/iPod/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	|| navigator.userAgent.match(/Windows Phone/i) ? true : false;
  }

  ngOnInit(): void { }

  prepareRoute(outlet: RouterOutlet): any {
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
