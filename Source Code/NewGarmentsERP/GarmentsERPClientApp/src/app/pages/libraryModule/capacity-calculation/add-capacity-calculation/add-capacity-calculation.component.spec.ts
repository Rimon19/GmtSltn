import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCapacityCalculationComponent } from './add-capacity-calculation.component';

describe('AddCapacityCalculationComponent', () => {
  let component: AddCapacityCalculationComponent;
  let fixture: ComponentFixture<AddCapacityCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCapacityCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCapacityCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
