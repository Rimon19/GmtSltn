import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLabTestRateChartComponent } from './edit-lab-test-rate-chart.component';

describe('EditLabTestRateChartComponent', () => {
  let component: EditLabTestRateChartComponent;
  let fixture: ComponentFixture<EditLabTestRateChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditLabTestRateChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLabTestRateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
