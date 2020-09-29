import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditParsialFabricBookingComponent } from './edit-parsial-fabric-booking.component';

describe('EditParsialFabricBookingComponent', () => {
  let component: EditParsialFabricBookingComponent;
  let fixture: ComponentFixture<EditParsialFabricBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditParsialFabricBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditParsialFabricBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
