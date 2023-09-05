import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServiceDetailsPageComponent } from './customer-service-details-page.component';

describe('CustomerServiceDetailsPageComponent', () => {
  let component: CustomerServiceDetailsPageComponent;
  let fixture: ComponentFixture<CustomerServiceDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerServiceDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerServiceDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
