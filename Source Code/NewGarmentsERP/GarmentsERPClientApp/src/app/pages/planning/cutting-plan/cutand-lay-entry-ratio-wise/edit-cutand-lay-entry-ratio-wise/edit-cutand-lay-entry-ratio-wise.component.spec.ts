import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCutandLayEntryRatioWiseComponent } from './edit-cutand-lay-entry-ratio-wise.component';

describe('EditCutandLayEntryRatioWiseComponent', () => {
  let component: EditCutandLayEntryRatioWiseComponent;
  let fixture: ComponentFixture<EditCutandLayEntryRatioWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCutandLayEntryRatioWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCutandLayEntryRatioWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
