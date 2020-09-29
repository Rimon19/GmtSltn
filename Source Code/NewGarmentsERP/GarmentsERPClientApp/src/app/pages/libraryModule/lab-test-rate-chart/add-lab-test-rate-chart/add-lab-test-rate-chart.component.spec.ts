import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLabTestRateChartComponent } from './add-lab-test-rate-chart.component';

describe('AddLabTestRateChartComponent', () => {
  let component: AddLabTestRateChartComponent;
  let fixture: ComponentFixture<AddLabTestRateChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLabTestRateChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLabTestRateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
