import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFastreactComparisonComponent } from './add-fastreact-comparison.component';

describe('AddFastreactComparisonComponent', () => {
  let component: AddFastreactComparisonComponent;
  let fixture: ComponentFixture<AddFastreactComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFastreactComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFastreactComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
