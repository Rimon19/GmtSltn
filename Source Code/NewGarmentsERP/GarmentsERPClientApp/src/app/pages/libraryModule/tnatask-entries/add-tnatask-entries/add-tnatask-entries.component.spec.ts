import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTNATaskEntriesComponent } from './add-tnatask-entries.component';

describe('AddTNATaskEntriesComponent', () => {
  let component: AddTNATaskEntriesComponent;
  let fixture: ComponentFixture<AddTNATaskEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTNATaskEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTNATaskEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
