import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesForecastEntryComponent } from './sales-forecast-entry.component';

describe('SalesForecastEntryComponent', () => {
  let component: SalesForecastEntryComponent;
  let fixture: ComponentFixture<SalesForecastEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesForecastEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesForecastEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
