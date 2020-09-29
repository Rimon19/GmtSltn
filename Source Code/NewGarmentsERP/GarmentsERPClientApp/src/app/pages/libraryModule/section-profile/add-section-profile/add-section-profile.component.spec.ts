import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionProfileComponent } from './add-section-profile.component';

describe('AddSectionProfileComponent', () => {
  let component: AddSectionProfileComponent;
  let fixture: ComponentFixture<AddSectionProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
