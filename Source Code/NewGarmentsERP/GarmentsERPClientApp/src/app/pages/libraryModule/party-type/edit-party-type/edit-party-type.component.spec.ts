import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPartyTypeComponent } from './edit-party-type.component';

describe('EditPartyTypeComponent', () => {
  let component: EditPartyTypeComponent;
  let fixture: ComponentFixture<EditPartyTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPartyTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPartyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
