import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAddressSetupComponent } from './email-address-setup.component';

describe('EmailAddressSetupComponent', () => {
  let component: EmailAddressSetupComponent;
  let fixture: ComponentFixture<EmailAddressSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailAddressSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailAddressSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
