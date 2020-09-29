import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmailAddressSetupComponent } from './add-email-address-setup.component';

describe('AddEmailAddressSetupComponent', () => {
  let component: AddEmailAddressSetupComponent;
  let fixture: ComponentFixture<AddEmailAddressSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmailAddressSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmailAddressSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
