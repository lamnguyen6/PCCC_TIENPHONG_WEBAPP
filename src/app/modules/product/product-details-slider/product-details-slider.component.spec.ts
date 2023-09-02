import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsSliderComponent } from './product-details-slider.component';

describe('ProductDetailsSliderComponent', () => {
  let component: ProductDetailsSliderComponent;
  let fixture: ComponentFixture<ProductDetailsSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
