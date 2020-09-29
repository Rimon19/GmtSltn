import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSampleFabricBookingWithoutorderDetailsComponent } from './edit-sample-fabric-booking-withoutorder-details.component';

describe('EditSampleFabricBookingWithoutorderDetailsComponent', () => {
  let component: EditSampleFabricBookingWithoutorderDetailsComponent;
  let fixture: ComponentFixture<EditSampleFabricBookingWithoutorderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSampleFabricBookingWithoutorderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSampleFabricBookingWithoutorderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
