import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShortFabricBookingDetailsComponent } from './add-short-fabric-booking-details.component';

describe('AddShortFabricBookingDetailsComponent', () => {
  let component: AddShortFabricBookingDetailsComponent;
  let fixture: ComponentFixture<AddShortFabricBookingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShortFabricBookingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShortFabricBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
