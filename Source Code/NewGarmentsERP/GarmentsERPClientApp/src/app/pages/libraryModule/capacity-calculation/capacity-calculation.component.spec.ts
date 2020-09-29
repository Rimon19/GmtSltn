import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityCalculationComponent } from './capacity-calculation.component';

describe('CapacityCalculationComponent', () => {
  let component: CapacityCalculationComponent;
  let fixture: ComponentFixture<CapacityCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacityCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
