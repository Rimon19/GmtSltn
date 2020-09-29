import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMembersInfoComponent } from './add-members-info.component';

describe('AddMembersInfoComponent', () => {
  let component: AddMembersInfoComponent;
  let fixture: ComponentFixture<AddMembersInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMembersInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMembersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
