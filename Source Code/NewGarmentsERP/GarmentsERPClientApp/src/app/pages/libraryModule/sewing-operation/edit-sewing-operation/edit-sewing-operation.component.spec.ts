import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSewingOperationComponent } from './edit-sewing-operation.component';

describe('EditSewingOperationComponent', () => {
  let component: EditSewingOperationComponent;
  let fixture: ComponentFixture<EditSewingOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSewingOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSewingOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
