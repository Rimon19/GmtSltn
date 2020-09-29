import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutandLayEntryRatioWise2Component } from './cutand-lay-entry-ratio-wise2.component';

describe('CutandLayEntryRatioWise2Component', () => {
  let component: CutandLayEntryRatioWise2Component;
  let fixture: ComponentFixture<CutandLayEntryRatioWise2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutandLayEntryRatioWise2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutandLayEntryRatioWise2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
