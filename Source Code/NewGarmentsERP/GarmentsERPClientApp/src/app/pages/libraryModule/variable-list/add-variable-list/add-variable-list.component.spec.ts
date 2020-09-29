import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVariableListComponent } from './add-variable-list.component';

describe('AddVariableListComponent', () => {
  let component: AddVariableListComponent;
  let fixture: ComponentFixture<AddVariableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVariableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVariableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
