import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFastreactComparisonComponent } from './edit-fastreact-comparison.component';

describe('EditFastreactComparisonComponent', () => {
  let component: EditFastreactComparisonComponent;
  let fixture: ComponentFixture<EditFastreactComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFastreactComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFastreactComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
