import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParsialFabricBookingSearchComponent } from './parsial-fabric-booking-search.component';

describe('ParsialFabricBookingSearchComponent', () => {
  let component: ParsialFabricBookingSearchComponent;
  let fixture: ComponentFixture<ParsialFabricBookingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParsialFabricBookingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParsialFabricBookingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
