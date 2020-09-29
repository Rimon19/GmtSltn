import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConsumptionForEmbelCostComponent } from './add-consumption-for-embel-cost.component';

describe('AddConsumptionForEmbelCostComponent', () => {
  let component: AddConsumptionForEmbelCostComponent;
  let fixture: ComponentFixture<AddConsumptionForEmbelCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConsumptionForEmbelCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConsumptionForEmbelCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
