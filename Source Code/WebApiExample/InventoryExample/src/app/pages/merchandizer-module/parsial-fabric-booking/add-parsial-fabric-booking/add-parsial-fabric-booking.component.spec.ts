import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParsialFabricBookingComponent } from './add-parsial-fabric-booking.component';

describe('AddParsialFabricBookingComponent', () => {
  let component: AddParsialFabricBookingComponent;
  let fixture: ComponentFixture<AddParsialFabricBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParsialFabricBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParsialFabricBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
