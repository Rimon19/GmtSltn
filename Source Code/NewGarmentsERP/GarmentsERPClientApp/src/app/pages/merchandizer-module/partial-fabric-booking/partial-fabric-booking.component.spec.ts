import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialFabricBookingComponent } from './partial-fabric-booking.component';

describe('PartialFabricBookingComponent', () => {
  let component: PartialFabricBookingComponent;
  let fixture: ComponentFixture<PartialFabricBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialFabricBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialFabricBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
