import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsialFabricBookingComponent } from './parsial-fabric-booking.component';

describe('ParsialFabricBookingComponent', () => {
  let component: ParsialFabricBookingComponent;
  let fixture: ComponentFixture<ParsialFabricBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParsialFabricBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParsialFabricBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
