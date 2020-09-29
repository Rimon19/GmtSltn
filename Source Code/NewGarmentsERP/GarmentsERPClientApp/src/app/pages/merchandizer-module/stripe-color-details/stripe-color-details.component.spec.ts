import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeColorDetailsComponent } from './stripe-color-details.component';

describe('StripeColorDetailsComponent', () => {
  let component: StripeColorDetailsComponent;
  let fixture: ComponentFixture<StripeColorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeColorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeColorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
