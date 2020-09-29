import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamleaderComponent } from './add-teamleader.component';

describe('AddTeamleaderComponent', () => {
  let component: AddTeamleaderComponent;
  let fixture: ComponentFixture<AddTeamleaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeamleaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamleaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
