import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacityAllocationsComponent } from './capacity-allocations.component';

describe('CapacityAllocationsComponent', () => {
  let component: CapacityAllocationsComponent;
  let fixture: ComponentFixture<CapacityAllocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapacityAllocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacityAllocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
