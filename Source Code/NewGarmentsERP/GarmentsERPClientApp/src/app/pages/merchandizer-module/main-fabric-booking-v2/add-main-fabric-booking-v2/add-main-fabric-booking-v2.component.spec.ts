import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMainFabricBookingV2Component } from './add-main-fabric-booking-v2.component';

describe('AddMainFabricBookingV2Component', () => {
  let component: AddMainFabricBookingV2Component;
  let fixture: ComponentFixture<AddMainFabricBookingV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMainFabricBookingV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMainFabricBookingV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
