import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFabricBookingV2Component } from './main-fabric-booking-v2.component';

describe('MainFabricBookingV2Component', () => {
  let component: MainFabricBookingV2Component;
  let fixture: ComponentFixture<MainFabricBookingV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFabricBookingV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFabricBookingV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
