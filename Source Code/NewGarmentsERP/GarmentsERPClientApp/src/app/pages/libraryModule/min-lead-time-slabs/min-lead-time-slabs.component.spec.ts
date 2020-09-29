import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinLeadTimeSlabsComponent } from './min-lead-time-slabs.component';

describe('MinLeadTimeSlabsComponent', () => {
  let component: MinLeadTimeSlabsComponent;
  let fixture: ComponentFixture<MinLeadTimeSlabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinLeadTimeSlabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinLeadTimeSlabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
