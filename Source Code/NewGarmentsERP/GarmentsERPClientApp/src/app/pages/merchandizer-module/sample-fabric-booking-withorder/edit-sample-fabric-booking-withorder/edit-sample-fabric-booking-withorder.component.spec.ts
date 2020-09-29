import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSampleFabricBookingWithorderComponent } from './edit-sample-fabric-booking-withorder.component';

describe('EditSampleFabricBookingWithorderComponent', () => {
  let component: EditSampleFabricBookingWithorderComponent;
  let fixture: ComponentFixture<EditSampleFabricBookingWithorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSampleFabricBookingWithorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSampleFabricBookingWithorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
