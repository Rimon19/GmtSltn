import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShortFabricBookingComponent } from './add-short-fabric-booking.component';

describe('AddShortFabricBookingComponent', () => {
  let component: AddShortFabricBookingComponent;
  let fixture: ComponentFixture<AddShortFabricBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShortFabricBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShortFabricBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
