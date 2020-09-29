import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTeamleaderComponent } from './show-teamleader.component';

describe('ShowTeamleaderComponent', () => {
  let component: ShowTeamleaderComponent;
  let fixture: ComponentFixture<ShowTeamleaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowTeamleaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTeamleaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
