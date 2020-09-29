import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTNATaskEntriesComponent } from './edit-tnatask-entries.component';

describe('EditTNATaskEntriesComponent', () => {
  let component: EditTNATaskEntriesComponent;
  let fixture: ComponentFixture<EditTNATaskEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTNATaskEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTNATaskEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
