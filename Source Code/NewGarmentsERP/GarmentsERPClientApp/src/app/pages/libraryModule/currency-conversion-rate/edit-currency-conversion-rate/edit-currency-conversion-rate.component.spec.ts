import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCurrencyConversionRateComponent } from './edit-currency-conversion-rate.component';

describe('EditCurrencyConversionRateComponent', () => {
  let component: EditCurrencyConversionRateComponent;
  let fixture: ComponentFixture<EditCurrencyConversionRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCurrencyConversionRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCurrencyConversionRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
