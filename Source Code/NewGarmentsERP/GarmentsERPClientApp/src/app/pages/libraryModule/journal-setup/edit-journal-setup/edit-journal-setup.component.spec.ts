import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJournalSetupComponent } from './edit-journal-setup.component';

describe('EditJournalSetupComponent', () => {
  let component: EditJournalSetupComponent;
  let fixture: ComponentFixture<EditJournalSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJournalSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJournalSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
