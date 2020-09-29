import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSewingOperationComponent } from './add-sewing-operation.component';

describe('AddSewingOperationComponent', () => {
  let component: AddSewingOperationComponent;
  let fixture: ComponentFixture<AddSewingOperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSewingOperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSewingOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
