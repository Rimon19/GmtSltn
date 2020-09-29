import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCapacityCalculationComponent } from './edit-capacity-calculation.component';

describe('EditCapacityCalculationComponent', () => {
  let component: EditCapacityCalculationComponent;
  let fixture: ComponentFixture<EditCapacityCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCapacityCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCapacityCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
