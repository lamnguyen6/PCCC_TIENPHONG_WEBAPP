import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotlineComponent } from './hotline.component';

describe('HotlineComponent', () => {
  let component: HotlineComponent;
  let fixture: ComponentFixture<HotlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
