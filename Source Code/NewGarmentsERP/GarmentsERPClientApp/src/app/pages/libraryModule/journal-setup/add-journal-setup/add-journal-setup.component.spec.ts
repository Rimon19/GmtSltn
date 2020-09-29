import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJournalSetupComponent } from './add-journal-setup.component';

describe('AddJournalSetupComponent', () => {
  let component: AddJournalSetupComponent;
  let fixture: ComponentFixture<AddJournalSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJournalSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJournalSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
