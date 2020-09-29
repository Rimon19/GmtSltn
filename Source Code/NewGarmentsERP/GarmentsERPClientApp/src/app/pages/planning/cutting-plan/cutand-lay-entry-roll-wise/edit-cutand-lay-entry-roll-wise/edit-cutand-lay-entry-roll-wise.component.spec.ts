import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCutandLayEntryRollWiseComponent } from './edit-cutand-lay-entry-roll-wise.component';

describe('EditCutandLayEntryRollWiseComponent', () => {
  let component: EditCutandLayEntryRollWiseComponent;
  let fixture: ComponentFixture<EditCutandLayEntryRollWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCutandLayEntryRollWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCutandLayEntryRollWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
