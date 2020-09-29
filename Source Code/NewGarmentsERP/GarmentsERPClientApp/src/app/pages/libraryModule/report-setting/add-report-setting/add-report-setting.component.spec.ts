import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReportSettingComponent } from './add-report-setting.component';

describe('AddReportSettingComponent', () => {
  let component: AddReportSettingComponent;
  let fixture: ComponentFixture<AddReportSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReportSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReportSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
