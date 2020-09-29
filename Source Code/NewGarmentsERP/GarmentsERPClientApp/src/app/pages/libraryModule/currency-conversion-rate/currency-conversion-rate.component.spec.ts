import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConversionRateComponent } from './currency-conversion-rate.component';

describe('CurrencyConversionRateComponent', () => {
  let component: CurrencyConversionRateComponent;
  let fixture: ComponentFixture<CurrencyConversionRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyConversionRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyConversionRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
