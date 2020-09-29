import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMultipleJobWiseEmbellishmentWorkOrderComponent } from './add-multiple-job-wise-embellishment-work-order.component';

describe('AddMultipleJobWiseEmbellishmentWorkOrderComponent', () => {
  let component: AddMultipleJobWiseEmbellishmentWorkOrderComponent;
  let fixture: ComponentFixture<AddMultipleJobWiseEmbellishmentWorkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMultipleJobWiseEmbellishmentWorkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMultipleJobWiseEmbellishmentWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
