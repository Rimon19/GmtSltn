import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingNoSelectionFormComponent } from './booking-no-selection-form.component';

describe('BookingNoSelectionFormComponent', () => {
  let component: BookingNoSelectionFormComponent;
  let fixture: ComponentFixture<BookingNoSelectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingNoSelectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingNoSelectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
