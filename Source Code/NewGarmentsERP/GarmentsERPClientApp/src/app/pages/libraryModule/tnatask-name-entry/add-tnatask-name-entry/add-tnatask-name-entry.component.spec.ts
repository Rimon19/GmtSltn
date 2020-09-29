import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTNATaskNameEntryComponent } from './add-tnatask-name-entry.component';

describe('AddTNATaskNameEntryComponent', () => {
  let component: AddTNATaskNameEntryComponent;
  let fixture: ComponentFixture<AddTNATaskNameEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTNATaskNameEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTNATaskNameEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
