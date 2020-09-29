import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMultiJobWSBKnittingDetailsComponent } from './add-multi-job-wsbknitting-details.component';

describe('AddMultiJobWSBKnittingDetailsComponent', () => {
  let component: AddMultiJobWSBKnittingDetailsComponent;
  let fixture: ComponentFixture<AddMultiJobWSBKnittingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMultiJobWSBKnittingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMultiJobWSBKnittingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
