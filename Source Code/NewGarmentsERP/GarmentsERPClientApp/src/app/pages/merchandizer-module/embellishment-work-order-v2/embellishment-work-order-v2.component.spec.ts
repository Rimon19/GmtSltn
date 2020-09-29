import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbellishmentWorkOrderV2Component } from './embellishment-work-order-v2.component';

describe('EmbellishmentWorkOrderV2Component', () => {
  let component: EmbellishmentWorkOrderV2Component;
  let fixture: ComponentFixture<EmbellishmentWorkOrderV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbellishmentWorkOrderV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbellishmentWorkOrderV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
