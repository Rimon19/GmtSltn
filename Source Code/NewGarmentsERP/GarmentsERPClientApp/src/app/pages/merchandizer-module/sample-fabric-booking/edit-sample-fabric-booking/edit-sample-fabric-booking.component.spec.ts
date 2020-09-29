import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSampleFabricBookingComponent } from './edit-sample-fabric-booking.component';

describe('EditSampleFabricBookingComponent', () => {
  let component: EditSampleFabricBookingComponent;
  let fixture: ComponentFixture<EditSampleFabricBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSampleFabricBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSampleFabricBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
