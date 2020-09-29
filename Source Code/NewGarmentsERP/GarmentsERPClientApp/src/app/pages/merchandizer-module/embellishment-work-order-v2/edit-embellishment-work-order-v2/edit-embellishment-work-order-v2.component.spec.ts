import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmbellishmentWorkOrderV2Component } from './edit-embellishment-work-order-v2.component';

describe('EditEmbellishmentWorkOrderV2Component', () => {
  let component: EditEmbellishmentWorkOrderV2Component;
  let fixture: ComponentFixture<EditEmbellishmentWorkOrderV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmbellishmentWorkOrderV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmbellishmentWorkOrderV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
