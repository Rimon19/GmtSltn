import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYarnPurchaseRequisitionComponent } from './add-yarn-purchase-requisition.component';

describe('AddYarnPurchaseRequisitionComponent', () => {
  let component: AddYarnPurchaseRequisitionComponent;
  let fixture: ComponentFixture<AddYarnPurchaseRequisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYarnPurchaseRequisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYarnPurchaseRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
