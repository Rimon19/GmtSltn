import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCutandLayEntryComponent } from './edit-cutand-lay-entry.component';

describe('EditCutandLayEntryComponent', () => {
  let component: EditCutandLayEntryComponent;
  let fixture: ComponentFixture<EditCutandLayEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCutandLayEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCutandLayEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
