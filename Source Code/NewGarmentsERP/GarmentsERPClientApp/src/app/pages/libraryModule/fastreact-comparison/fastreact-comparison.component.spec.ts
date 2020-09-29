import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastreactComparisonComponent } from './fastreact-comparison.component';

describe('FastreactComparisonComponent', () => {
  let component: FastreactComparisonComponent;
  let fixture: ComponentFixture<FastreactComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastreactComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastreactComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
