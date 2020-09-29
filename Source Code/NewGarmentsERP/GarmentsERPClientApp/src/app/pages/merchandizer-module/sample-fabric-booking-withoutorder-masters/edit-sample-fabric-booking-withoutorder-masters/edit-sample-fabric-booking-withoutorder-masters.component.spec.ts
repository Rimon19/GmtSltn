import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSampleFabricBookingWithoutorderMastersComponent } from './edit-sample-fabric-booking-withoutorder-masters.component';

describe('EditSampleFabricBookingWithoutorderMastersComponent', () => {
  let component: EditSampleFabricBookingWithoutorderMastersComponent;
  let fixture: ComponentFixture<EditSampleFabricBookingWithoutorderMastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSampleFabricBookingWithoutorderMastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSampleFabricBookingWithoutorderMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
