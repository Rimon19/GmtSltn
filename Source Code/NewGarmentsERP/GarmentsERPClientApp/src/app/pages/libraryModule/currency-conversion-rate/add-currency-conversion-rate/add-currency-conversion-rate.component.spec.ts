import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCurrencyConversionRateComponent } from './add-currency-conversion-rate.component';

describe('AddCurrencyConversionRateComponent', () => {
  let component: AddCurrencyConversionRateComponent;
  let fixture: ComponentFixture<AddCurrencyConversionRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCurrencyConversionRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCurrencyConversionRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
