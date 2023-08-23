import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[idleOnScroll]'
})
export class IdleOnScrollDirective {
  @Input('scrollContainer') scrollContainer!: HTMLElement; // Element to observe scrolling
  @Input('animationFunction') animationFunction!: (element: HTMLElement, speed: number) => void; // Animation function to be called
  
  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    console.log(`a loi1`);
    this.animateOnScroll();
  }

  private animateOnScroll() {
    const element = this.el.nativeElement;
    const elementPosition = element.getBoundingClientRect().top;
    const containerPosition = this.scrollContainer.getBoundingClientRect().top;
    const containerHeight = this.scrollContainer.clientHeight;

    if (elementPosition - containerPosition - containerHeight <= 0) {
      const scrollSpeed = this.calculateScrollSpeed();
      this.animationFunction(element, scrollSpeed);
    }
  }
  private calculateScrollSpeed(): number {
    const previousScrollTop = Number(this.scrollContainer.dataset['scrollTop']) || 0;
    const currentScrollTop = window.scrollY;
    const scrollSpeed = Math.abs(currentScrollTop - previousScrollTop);
    this.scrollContainer.dataset['scrollTop'] = currentScrollTop.toString();
    return scrollSpeed;
  }
}
