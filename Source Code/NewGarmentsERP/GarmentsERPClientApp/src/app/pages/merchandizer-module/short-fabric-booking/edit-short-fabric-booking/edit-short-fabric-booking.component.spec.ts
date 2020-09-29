import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShortFabricBookingComponent } from './edit-short-fabric-booking.component';

describe('EditShortFabricBookingComponent', () => {
  let component: EditShortFabricBookingComponent;
  let fixture: ComponentFixture<EditShortFabricBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShortFabricBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShortFabricBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
