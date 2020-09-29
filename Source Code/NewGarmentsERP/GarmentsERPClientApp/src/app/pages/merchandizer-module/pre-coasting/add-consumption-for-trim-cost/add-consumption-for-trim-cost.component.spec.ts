import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsumptionForTrimCostComponent } from './add-consumption-for-trim-cost.component';

describe('AddConsumptionForTrimCostComponent', () => {
  let component: AddConsumptionForTrimCostComponent;
  let fixture: ComponentFixture<AddConsumptionForTrimCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConsumptionForTrimCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsumptionForTrimCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
