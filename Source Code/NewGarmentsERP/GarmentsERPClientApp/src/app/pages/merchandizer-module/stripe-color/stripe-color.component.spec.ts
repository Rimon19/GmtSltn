import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeColorComponent } from './stripe-color.component';

describe('StripeColorComponent', () => {
  let component: StripeColorComponent;
  let fixture: ComponentFixture<StripeColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
