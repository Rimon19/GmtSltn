import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnPurchaseRequisitionDetailsComponent } from './yarn-purchase-requisition-details.component';

describe('YarnPurchaseRequisitionDetailsComponent', () => {
  let component: YarnPurchaseRequisitionDetailsComponent;
  let fixture: ComponentFixture<YarnPurchaseRequisitionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarnPurchaseRequisitionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnPurchaseRequisitionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
