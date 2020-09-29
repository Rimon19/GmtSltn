import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceBookingForDyeingComponent } from './edit-service-booking-for-dyeing.component';

describe('EditServiceBookingForDyeingComponent', () => {
  let component: EditServiceBookingForDyeingComponent;
  let fixture: ComponentFixture<EditServiceBookingForDyeingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceBookingForDyeingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceBookingForDyeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
