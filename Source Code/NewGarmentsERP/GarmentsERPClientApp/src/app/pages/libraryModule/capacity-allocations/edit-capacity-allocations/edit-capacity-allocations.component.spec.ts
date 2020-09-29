import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCapacityAllocationsComponent } from './edit-capacity-allocations.component';

describe('EditCapacityAllocationsComponent', () => {
  let component: EditCapacityAllocationsComponent;
  let fixture: ComponentFixture<EditCapacityAllocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCapacityAllocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCapacityAllocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
