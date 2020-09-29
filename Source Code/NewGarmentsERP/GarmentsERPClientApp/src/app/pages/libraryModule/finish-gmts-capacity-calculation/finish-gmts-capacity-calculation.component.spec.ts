import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishGmtsCapacityCalculationComponent } from './finish-gmts-capacity-calculation.component';

describe('FinishGmtsCapacityCalculationComponent', () => {
  let component: FinishGmtsCapacityCalculationComponent;
  let fixture: ComponentFixture<FinishGmtsCapacityCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishGmtsCapacityCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishGmtsCapacityCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
