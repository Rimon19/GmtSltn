import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTestRateChartComponent } from './lab-test-rate-chart.component';

describe('LabTestRateChartComponent', () => {
  let component: LabTestRateChartComponent;
  let fixture: ComponentFixture<LabTestRateChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabTestRateChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabTestRateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
