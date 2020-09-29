import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOtherPartyProfileComponent } from './edit-other-party-profile.component';

describe('EditOtherPartyProfileComponent', () => {
  let component: EditOtherPartyProfileComponent;
  let fixture: ComponentFixture<EditOtherPartyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOtherPartyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOtherPartyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
