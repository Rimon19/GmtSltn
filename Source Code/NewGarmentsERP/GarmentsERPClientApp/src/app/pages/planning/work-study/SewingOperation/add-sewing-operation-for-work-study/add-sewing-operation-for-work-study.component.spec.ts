import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSewingOperationForWorkStudyComponent } from './add-sewing-operation-for-work-study.component';

describe('AddSewingOperationForWorkStudyComponent', () => {
  let component: AddSewingOperationForWorkStudyComponent;
  let fixture: ComponentFixture<AddSewingOperationForWorkStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSewingOperationForWorkStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSewingOperationForWorkStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
