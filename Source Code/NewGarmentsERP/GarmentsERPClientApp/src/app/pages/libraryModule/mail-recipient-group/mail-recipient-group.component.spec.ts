import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailRecipientGroupComponent } from './mail-recipient-group.component';

describe('MailRecipientGroupComponent', () => {
  let component: MailRecipientGroupComponent;
  let fixture: ComponentFixture<MailRecipientGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailRecipientGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailRecipientGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
