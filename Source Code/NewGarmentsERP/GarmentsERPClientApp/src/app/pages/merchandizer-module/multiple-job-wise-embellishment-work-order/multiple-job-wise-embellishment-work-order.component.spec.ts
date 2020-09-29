import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleJobWiseEmbellishmentWorkOrderComponent } from './multiple-job-wise-embellishment-work-order.component';

describe('MultipleJobWiseEmbellishmentWorkOrderComponent', () => {
  let component: MultipleJobWiseEmbellishmentWorkOrderComponent;
  let fixture: ComponentFixture<MultipleJobWiseEmbellishmentWorkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleJobWiseEmbellishmentWorkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleJobWiseEmbellishmentWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
