import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceBookingForDyeingComponent } from './add-service-booking-for-dyeing.component';

describe('AddServiceBookingForDyeingComponent', () => {
  let component: AddServiceBookingForDyeingComponent;
  let fixture: ComponentFixture<AddServiceBookingForDyeingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceBookingForDyeingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceBookingForDyeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
