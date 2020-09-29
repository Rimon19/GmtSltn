import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddColourEntryComponent } from './add-colour-entry.component';

describe('AddColourEntryComponent', () => {
  let component: AddColourEntryComponent;
  let fixture: ComponentFixture<AddColourEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddColourEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddColourEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
