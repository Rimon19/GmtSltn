import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPartialFabricBookingComponent } from './edit-partial-fabric-booking.component';

describe('EditPartialFabricBookingComponent', () => {
  let component: EditPartialFabricBookingComponent;
  let fixture: ComponentFixture<EditPartialFabricBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPartialFabricBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPartialFabricBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
