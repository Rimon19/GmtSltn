import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherPartyProfileComponent } from './other-party-profile.component';

describe('OtherPartyProfileComponent', () => {
  let component: OtherPartyProfileComponent;
  let fixture: ComponentFixture<OtherPartyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherPartyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherPartyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
