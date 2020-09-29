import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountingYearComponent } from './edit-accounting-year.component';

describe('EditAccountingYearComponent', () => {
  let component: EditAccountingYearComponent;
  let fixture: ComponentFixture<EditAccountingYearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAccountingYearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountingYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
