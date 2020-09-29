import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShortFabricBookingDetailsComponent } from './edit-short-fabric-booking-details.component';

describe('EditShortFabricBookingDetailsComponent', () => {
  let component: EditShortFabricBookingDetailsComponent;
  let fixture: ComponentFixture<EditShortFabricBookingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShortFabricBookingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShortFabricBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
