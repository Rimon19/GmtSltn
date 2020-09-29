import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarketingTeamInfoComponent } from './add-marketing-team-info.component';

describe('AddMarketingTeamInfoComponent', () => {
  let component: AddMarketingTeamInfoComponent;
  let fixture: ComponentFixture<AddMarketingTeamInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarketingTeamInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarketingTeamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
