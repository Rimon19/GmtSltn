import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditColourEntryComponent } from './edit-colour-entry.component';

describe('EditColourEntryComponent', () => {
  let component: EditColourEntryComponent;
  let fixture: ComponentFixture<EditColourEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditColourEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditColourEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
