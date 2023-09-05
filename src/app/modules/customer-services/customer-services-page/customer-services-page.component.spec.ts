import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerServicesPageComponent } from './customer-services-page.component';

describe('CustomerServicesPageComponent', () => {
  let component: CustomerServicesPageComponent;
  let fixture: ComponentFixture<CustomerServicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerServicesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
