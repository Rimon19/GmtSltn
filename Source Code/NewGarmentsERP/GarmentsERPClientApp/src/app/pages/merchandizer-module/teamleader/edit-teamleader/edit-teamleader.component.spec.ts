import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTeamleaderComponent } from './edit-teamleader.component';

describe('EditTeamleaderComponent', () => {
  let component: EditTeamleaderComponent;
  let fixture: ComponentFixture<EditTeamleaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTeamleaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTeamleaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
