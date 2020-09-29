import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVariableListComponent } from './edit-variable-list.component';

describe('EditVariableListComponent', () => {
  let component: EditVariableListComponent;
  let fixture: ComponentFixture<EditVariableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVariableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVariableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
