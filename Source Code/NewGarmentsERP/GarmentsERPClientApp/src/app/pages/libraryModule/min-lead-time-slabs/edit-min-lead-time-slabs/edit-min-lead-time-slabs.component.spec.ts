import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMinLeadTimeSlabsComponent } from './edit-min-lead-time-slabs.component';

describe('EditMinLeadTimeSlabsComponent', () => {
  let component: EditMinLeadTimeSlabsComponent;
  let fixture: ComponentFixture<EditMinLeadTimeSlabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMinLeadTimeSlabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMinLeadTimeSlabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
