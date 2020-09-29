import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutandLayEntryRatioWiseUrmiComponent } from './cutand-lay-entry-ratio-wise-urmi.component';

describe('CutandLayEntryRatioWiseUrmiComponent', () => {
  let component: CutandLayEntryRatioWiseUrmiComponent;
  let fixture: ComponentFixture<CutandLayEntryRatioWiseUrmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutandLayEntryRatioWiseUrmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutandLayEntryRatioWiseUrmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
