import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFabricServiceBookingComponent } from './edit-fabric-service-booking.component';

describe('EditFabricServiceBookingComponent', () => {
  let component: EditFabricServiceBookingComponent;
  let fixture: ComponentFixture<EditFabricServiceBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFabricServiceBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFabricServiceBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
