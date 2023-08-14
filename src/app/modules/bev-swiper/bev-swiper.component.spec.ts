import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BevSwiperComponent } from './bev-swiper.component';

describe('BevSwiperComponent', () => {
  let component: BevSwiperComponent;
  let fixture: ComponentFixture<BevSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BevSwiperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BevSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
