import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTNATaskPercentComponent } from './add-tnatask-percent.component';

describe('AddTNATaskPercentComponent', () => {
  let component: AddTNATaskPercentComponent;
  let fixture: ComponentFixture<AddTNATaskPercentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTNATaskPercentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTNATaskPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
