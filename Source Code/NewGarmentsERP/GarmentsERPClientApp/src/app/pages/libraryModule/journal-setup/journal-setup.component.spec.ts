import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalSetupComponent } from './journal-setup.component';

describe('JournalSetupComponent', () => {
  let component: JournalSetupComponent;
  let fixture: ComponentFixture<JournalSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
