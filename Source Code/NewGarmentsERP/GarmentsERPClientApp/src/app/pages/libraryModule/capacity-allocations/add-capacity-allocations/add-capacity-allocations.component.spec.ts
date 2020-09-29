import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCapacityAllocationsComponent } from './add-capacity-allocations.component';

describe('AddCapacityAllocationsComponent', () => {
  let component: AddCapacityAllocationsComponent;
  let fixture: ComponentFixture<AddCapacityAllocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCapacityAllocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCapacityAllocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
