import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animate, group, keyframes, query, style, transition, trigger } from "@angular/animations";

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
				animate('0.5s 1.2s ease', keyframes([
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
  constructor() { }

  ngOnInit(): void { }

  prepareRoute(outlet: RouterOutlet): any {
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
