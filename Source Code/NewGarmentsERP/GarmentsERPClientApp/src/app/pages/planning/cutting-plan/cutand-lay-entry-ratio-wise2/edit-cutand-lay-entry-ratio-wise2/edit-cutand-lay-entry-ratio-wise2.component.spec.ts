import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCutandLayEntryRatioWise2Component } from './edit-cutand-lay-entry-ratio-wise2.component';

describe('EditCutandLayEntryRatioWise2Component', () => {
  let component: EditCutandLayEntryRatioWise2Component;
  let fixture: ComponentFixture<EditCutandLayEntryRatioWise2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCutandLayEntryRatioWise2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCutandLayEntryRatioWise2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
