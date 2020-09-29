import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamleaderComponent } from './teamleader.component';

describe('TeamleaderComponent', () => {
  let component: TeamleaderComponent;
  let fixture: ComponentFixture<TeamleaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamleaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamleaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
