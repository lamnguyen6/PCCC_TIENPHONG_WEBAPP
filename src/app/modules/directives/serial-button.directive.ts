import { Directive, ElementRef, Input } from '@angular/core';
import { Subscription, fromEvent, Observable, isObservable, of, empty } from 'rxjs';
import { exhaustMap, take, finalize, debounceTime } from 'rxjs/operators';

export type ButtonHandler = (e?: MouseEvent) => Observable<unknown> | Promise<unknown>;

const defaultHandler: ButtonHandler = (e) => empty();

@Directive({
  	selector: 'button[serial-btn]',
	exportAs: 'serialBtn',
	host: {
        '[disabled]': 'disableWhenProcessing && _processing'
    }
})
export class SerialButtonDirective {
	_processing = false;
    private _sub = Subscription.EMPTY;
    @Input() disableWhenProcessing = false;
    @Input() handler: ButtonHandler = defaultHandler;
    @Input('debounceTime') debounceTime: number = 3e2; // ms
  
    get processing(): boolean { return this._processing };
    constructor(
        private readonly btnElement: ElementRef<HTMLButtonElement>,
    ) { }

    ngAfterViewInit() {
        this._sub = fromEvent<MouseEvent>(this.btnElement.nativeElement, 'click')
            .pipe(
                debounceTime(this.debounceTime),
                exhaustMap(e => this.wrapHandlerInObservable(e))
            ).subscribe();
    }
    ngOnDestroy() {
        this._sub.unsubscribe();
    }
    private wrapHandlerInObservable(e: MouseEvent) {
        this._processing = true;
        const handleResult = this.handler(e);
        let obs: Observable<unknown>;

        if (isObservable(handleResult)) {
            obs = handleResult;
        } else {
            obs = of(handleResult);
        }

        return obs.pipe(take(1), finalize(() => this._processing = false));
	}
}
