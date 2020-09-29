import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteParsialFabricBookingComponent } from './delete-parsial-fabric-booking.component';

describe('DeleteParsialFabricBookingComponent', () => {
  let component: DeleteParsialFabricBookingComponent;
  let fixture: ComponentFixture<DeleteParsialFabricBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteParsialFabricBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteParsialFabricBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
