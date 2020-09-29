import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutandLayEntryRollWiseComponent } from './cutand-lay-entry-roll-wise.component';

describe('CutandLayEntryRollWiseComponent', () => {
  let component: CutandLayEntryRollWiseComponent;
  let fixture: ComponentFixture<CutandLayEntryRollWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutandLayEntryRollWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutandLayEntryRollWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
