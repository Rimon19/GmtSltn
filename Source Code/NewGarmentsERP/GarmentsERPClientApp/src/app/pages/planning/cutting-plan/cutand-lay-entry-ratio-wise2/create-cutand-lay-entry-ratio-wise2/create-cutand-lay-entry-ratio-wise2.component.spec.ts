import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCutandLayEntryRatioWise2Component } from './create-cutand-lay-entry-ratio-wise2.component';

describe('CreateCutandLayEntryRatioWise2Component', () => {
  let component: CreateCutandLayEntryRatioWise2Component;
  let fixture: ComponentFixture<CreateCutandLayEntryRatioWise2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCutandLayEntryRatioWise2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCutandLayEntryRatioWise2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
