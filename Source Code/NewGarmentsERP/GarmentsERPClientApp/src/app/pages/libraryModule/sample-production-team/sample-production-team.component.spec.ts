import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleProductionTeamComponent } from './sample-production-team.component';

describe('SampleProductionTeamComponent', () => {
  let component: SampleProductionTeamComponent;
  let fixture: ComponentFixture<SampleProductionTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleProductionTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleProductionTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
