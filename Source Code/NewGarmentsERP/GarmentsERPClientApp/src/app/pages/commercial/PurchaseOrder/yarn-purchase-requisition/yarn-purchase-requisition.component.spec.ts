import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnPurchaseRequisitionComponent } from './yarn-purchase-requisition.component';

describe('YarnPurchaseRequisitionComponent', () => {
  let component: YarnPurchaseRequisitionComponent;
  let fixture: ComponentFixture<YarnPurchaseRequisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarnPurchaseRequisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnPurchaseRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
