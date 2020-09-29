import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmailAddressSetupComponent } from './edit-email-address-setup.component';

describe('EditEmailAddressSetupComponent', () => {
  let component: EditEmailAddressSetupComponent;
  let fixture: ComponentFixture<EditEmailAddressSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmailAddressSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmailAddressSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
