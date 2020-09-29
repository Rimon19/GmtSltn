import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMinLeadTimeSlabsComponent } from './add-min-lead-time-slabs.component';

describe('AddMinLeadTimeSlabsComponent', () => {
  let component: AddMinLeadTimeSlabsComponent;
  let fixture: ComponentFixture<AddMinLeadTimeSlabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMinLeadTimeSlabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMinLeadTimeSlabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
