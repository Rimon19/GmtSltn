import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMultipleJobWiseEmbellishmentWorkOrderComponent } from './edit-multiple-job-wise-embellishment-work-order.component';

describe('EditMultipleJobWiseEmbellishmentWorkOrderComponent', () => {
  let component: EditMultipleJobWiseEmbellishmentWorkOrderComponent;
  let fixture: ComponentFixture<EditMultipleJobWiseEmbellishmentWorkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMultipleJobWiseEmbellishmentWorkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMultipleJobWiseEmbellishmentWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
