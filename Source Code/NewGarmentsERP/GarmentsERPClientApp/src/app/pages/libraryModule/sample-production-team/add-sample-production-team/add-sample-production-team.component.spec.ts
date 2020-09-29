import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSampleProductionTeamComponent } from './add-sample-production-team.component';

describe('AddSampleProductionTeamComponent', () => {
  let component: AddSampleProductionTeamComponent;
  let fixture: ComponentFixture<AddSampleProductionTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSampleProductionTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSampleProductionTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
