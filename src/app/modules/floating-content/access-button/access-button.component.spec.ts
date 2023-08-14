import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessButtonComponent } from './access-button.component';

describe('AccessButtonComponent', () => {
  let component: AccessButtonComponent;
  let fixture: ComponentFixture<AccessButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
