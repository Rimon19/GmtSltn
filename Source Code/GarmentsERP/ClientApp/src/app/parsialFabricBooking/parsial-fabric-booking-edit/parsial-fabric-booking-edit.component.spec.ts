import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsialFabricBookingEditComponent } from './parsial-fabric-booking-edit.component';

describe('ParsialFabricBookingEditComponent', () => {
  let component: ParsialFabricBookingEditComponent;
  let fixture: ComponentFixture<ParsialFabricBookingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParsialFabricBookingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParsialFabricBookingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
