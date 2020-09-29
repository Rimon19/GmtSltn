import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMembersInfoComponent } from './edit-members-info.component';

describe('EditMembersInfoComponent', () => {
  let component: EditMembersInfoComponent;
  let fixture: ComponentFixture<EditMembersInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMembersInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMembersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
