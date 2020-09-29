import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOtherPartyProfileComponent } from './add-other-party-profile.component';

describe('AddOtherPartyProfileComponent', () => {
  let component: AddOtherPartyProfileComponent;
  let fixture: ComponentFixture<AddOtherPartyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOtherPartyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOtherPartyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
