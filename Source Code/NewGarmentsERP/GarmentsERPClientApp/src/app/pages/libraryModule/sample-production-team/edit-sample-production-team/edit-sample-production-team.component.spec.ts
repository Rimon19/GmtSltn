import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSampleProductionTeamComponent } from './edit-sample-production-team.component';

describe('EditSampleProductionTeamComponent', () => {
  let component: EditSampleProductionTeamComponent;
  let fixture: ComponentFixture<EditSampleProductionTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSampleProductionTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSampleProductionTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
