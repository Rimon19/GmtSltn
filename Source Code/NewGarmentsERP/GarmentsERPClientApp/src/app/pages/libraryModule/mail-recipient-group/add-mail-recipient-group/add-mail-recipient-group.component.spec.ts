import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMailRecipientGroupComponent } from './add-mail-recipient-group.component';

describe('AddMailRecipientGroupComponent', () => {
  let component: AddMailRecipientGroupComponent;
  let fixture: ComponentFixture<AddMailRecipientGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMailRecipientGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMailRecipientGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
