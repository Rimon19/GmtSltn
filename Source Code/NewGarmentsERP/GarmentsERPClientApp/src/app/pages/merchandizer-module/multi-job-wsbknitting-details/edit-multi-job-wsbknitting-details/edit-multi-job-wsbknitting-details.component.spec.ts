import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMultiJobWSBKnittingDetailsComponent } from './edit-multi-job-wsbknitting-details.component';

describe('EditMultiJobWSBKnittingDetailsComponent', () => {
  let component: EditMultiJobWSBKnittingDetailsComponent;
  let fixture: ComponentFixture<EditMultiJobWSBKnittingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMultiJobWSBKnittingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMultiJobWSBKnittingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
