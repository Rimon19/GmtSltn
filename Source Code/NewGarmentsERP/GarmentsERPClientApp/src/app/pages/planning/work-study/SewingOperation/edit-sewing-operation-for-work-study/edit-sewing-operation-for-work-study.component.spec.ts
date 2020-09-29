import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSewingOperationForWorkStudyComponent } from './edit-sewing-operation-for-work-study.component';

describe('EditSewingOperationForWorkStudyComponent', () => {
  let component: EditSewingOperationForWorkStudyComponent;
  let fixture: ComponentFixture<EditSewingOperationForWorkStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSewingOperationForWorkStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSewingOperationForWorkStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
