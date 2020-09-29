import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTNATaskNameEntryComponent } from './edit-tnatask-name-entry.component';

describe('EditTNATaskNameEntryComponent', () => {
  let component: EditTNATaskNameEntryComponent;
  let fixture: ComponentFixture<EditTNATaskNameEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTNATaskNameEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTNATaskNameEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
