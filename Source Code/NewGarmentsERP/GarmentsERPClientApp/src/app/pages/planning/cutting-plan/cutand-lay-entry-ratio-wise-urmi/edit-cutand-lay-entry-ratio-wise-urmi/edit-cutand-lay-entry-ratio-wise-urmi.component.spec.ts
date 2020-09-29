import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCutandLayEntryRatioWiseUrmiComponent } from './edit-cutand-lay-entry-ratio-wise-urmi.component';

describe('EditCutandLayEntryRatioWiseUrmiComponent', () => {
  let component: EditCutandLayEntryRatioWiseUrmiComponent;
  let fixture: ComponentFixture<EditCutandLayEntryRatioWiseUrmiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCutandLayEntryRatioWiseUrmiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCutandLayEntryRatioWiseUrmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
