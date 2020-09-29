import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferingCostComponent } from './offering-cost.component';

describe('OfferingCostComponent', () => {
  let component: OfferingCostComponent;
  let fixture: ComponentFixture<OfferingCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferingCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferingCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
