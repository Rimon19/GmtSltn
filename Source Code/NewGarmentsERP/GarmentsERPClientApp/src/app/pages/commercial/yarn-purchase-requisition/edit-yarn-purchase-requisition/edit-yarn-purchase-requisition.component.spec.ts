import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditYarnPurchaseRequisitionComponent } from './edit-yarn-purchase-requisition.component';

describe('EditYarnPurchaseRequisitionComponent', () => {
  let component: EditYarnPurchaseRequisitionComponent;
  let fixture: ComponentFixture<EditYarnPurchaseRequisitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditYarnPurchaseRequisitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditYarnPurchaseRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
