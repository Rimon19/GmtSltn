import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMailRecipientGroupComponent } from './edit-mail-recipient-group.component';

describe('EditMailRecipientGroupComponent', () => {
  let component: EditMailRecipientGroupComponent;
  let fixture: ComponentFixture<EditMailRecipientGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMailRecipientGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMailRecipientGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
