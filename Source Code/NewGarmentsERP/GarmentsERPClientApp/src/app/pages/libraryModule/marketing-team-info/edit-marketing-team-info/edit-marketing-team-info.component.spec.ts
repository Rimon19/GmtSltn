import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMarketingTeamInfoComponent } from './edit-marketing-team-info.component';

describe('EditMarketingTeamInfoComponent', () => {
  let component: EditMarketingTeamInfoComponent;
  let fixture: ComponentFixture<EditMarketingTeamInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMarketingTeamInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMarketingTeamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
