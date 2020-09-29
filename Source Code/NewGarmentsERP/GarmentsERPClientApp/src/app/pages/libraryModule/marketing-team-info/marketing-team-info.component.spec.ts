import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingTeamInfoComponent } from './marketing-team-info.component';

describe('MarketingTeamInfoComponent', () => {
  let component: MarketingTeamInfoComponent;
  let fixture: ComponentFixture<MarketingTeamInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingTeamInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingTeamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
