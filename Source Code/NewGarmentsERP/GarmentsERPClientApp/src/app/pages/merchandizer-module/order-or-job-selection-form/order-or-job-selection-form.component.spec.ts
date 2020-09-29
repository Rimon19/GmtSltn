import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOrJobSelectionFormComponent } from './order-or-job-selection-form.component';

describe('OrderOrJobSelectionFormComponent', () => {
  let component: OrderOrJobSelectionFormComponent;
  let fixture: ComponentFixture<OrderOrJobSelectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderOrJobSelectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderOrJobSelectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
