import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowParsialFabricBookingComponent } from './show-parsial-fabric-booking.component';

describe('ShowParsialFabricBookingComponent', () => {
  let component: ShowParsialFabricBookingComponent;
  let fixture: ComponentFixture<ShowParsialFabricBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowParsialFabricBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowParsialFabricBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
