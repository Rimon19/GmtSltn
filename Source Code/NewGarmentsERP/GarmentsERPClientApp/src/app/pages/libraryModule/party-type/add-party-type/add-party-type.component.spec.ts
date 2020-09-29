import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPartyTypeComponent } from './add-party-type.component';

describe('AddPartyTypeComponent', () => {
  let component: AddPartyTypeComponent;
  let fixture: ComponentFixture<AddPartyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPartyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPartyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
