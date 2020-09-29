import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReportSettingComponent } from './edit-report-setting.component';

describe('EditReportSettingComponent', () => {
  let component: EditReportSettingComponent;
  let fixture: ComponentFixture<EditReportSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReportSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReportSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
