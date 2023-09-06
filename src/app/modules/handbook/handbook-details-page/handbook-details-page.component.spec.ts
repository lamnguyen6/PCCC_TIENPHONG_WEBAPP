import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandbookDetailsPageComponent } from './handbook-details-page.component';

describe('HandbookDetailsPageComponent', () => {
  let component: HandbookDetailsPageComponent;
  let fixture: ComponentFixture<HandbookDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandbookDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandbookDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
