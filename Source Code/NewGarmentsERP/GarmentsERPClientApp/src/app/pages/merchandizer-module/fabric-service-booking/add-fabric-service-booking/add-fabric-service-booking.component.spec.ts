import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFabricServiceBookingComponent } from './add-fabric-service-booking.component';

describe('AddFabricServiceBookingComponent', () => {
  let component: AddFabricServiceBookingComponent;
  let fixture: ComponentFixture<AddFabricServiceBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFabricServiceBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFabricServiceBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
