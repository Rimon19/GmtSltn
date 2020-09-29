import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsumptionForGmtsWashCostComponent } from './add-consumption-for-gmts-wash-cost.component';

describe('AddConsumptionForGmtsWashCostComponent', () => {
  let component: AddConsumptionForGmtsWashCostComponent;
  let fixture: ComponentFixture<AddConsumptionForGmtsWashCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConsumptionForGmtsWashCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsumptionForGmtsWashCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
