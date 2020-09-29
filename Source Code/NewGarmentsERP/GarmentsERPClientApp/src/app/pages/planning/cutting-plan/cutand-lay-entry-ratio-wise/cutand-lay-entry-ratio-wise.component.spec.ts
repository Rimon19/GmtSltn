import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutandLayEntryRatioWiseComponent } from './cutand-lay-entry-ratio-wise.component';

describe('CutandLayEntryRatioWiseComponent', () => {
  let component: CutandLayEntryRatioWiseComponent;
  let fixture: ComponentFixture<CutandLayEntryRatioWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutandLayEntryRatioWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutandLayEntryRatioWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
