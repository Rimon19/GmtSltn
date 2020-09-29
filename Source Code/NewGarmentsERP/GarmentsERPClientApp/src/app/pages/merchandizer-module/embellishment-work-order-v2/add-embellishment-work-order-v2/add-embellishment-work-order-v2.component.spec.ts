import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmbellishmentWorkOrderV2Component } from './add-embellishment-work-order-v2.component';

describe('AddEmbellishmentWorkOrderV2Component', () => {
  let component: AddEmbellishmentWorkOrderV2Component;
  let fixture: ComponentFixture<AddEmbellishmentWorkOrderV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmbellishmentWorkOrderV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmbellishmentWorkOrderV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
