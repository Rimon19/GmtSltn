import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSectionProfileComponent } from './edit-section-profile.component';

describe('EditSectionProfileComponent', () => {
  let component: EditSectionProfileComponent;
  let fixture: ComponentFixture<EditSectionProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSectionProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSectionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
