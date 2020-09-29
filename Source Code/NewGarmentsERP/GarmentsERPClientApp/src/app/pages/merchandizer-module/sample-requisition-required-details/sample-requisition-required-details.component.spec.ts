import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRequisitionRequiredDetailsComponent } from './sample-requisition-required-details.component';

describe('SampleRequisitionRequiredDetailsComponent', () => {
  let component: SampleRequisitionRequiredDetailsComponent;
  let fixture: ComponentFixture<SampleRequisitionRequiredDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleRequisitionRequiredDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRequisitionRequiredDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
