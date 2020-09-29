import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartialFabricBookingComponent } from './add-partial-fabric-booking.component';

describe('AddPartialFabricBookingComponent', () => {
  let component: AddPartialFabricBookingComponent;
  let fixture: ComponentFixture<AddPartialFabricBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPartialFabricBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartialFabricBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
