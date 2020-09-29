import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMainFabricBookingV2Component } from './edit-main-fabric-booking-v2.component';

describe('EditMainFabricBookingV2Component', () => {
  let component: EditMainFabricBookingV2Component;
  let fixture: ComponentFixture<EditMainFabricBookingV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMainFabricBookingV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMainFabricBookingV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
