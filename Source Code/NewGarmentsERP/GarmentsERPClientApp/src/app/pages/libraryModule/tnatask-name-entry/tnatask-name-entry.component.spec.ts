import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TNATaskNameEntryComponent } from './tnatask-name-entry.component';

describe('TNATaskNameEntryComponent', () => {
  let component: TNATaskNameEntryComponent;
  let fixture: ComponentFixture<TNATaskNameEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TNATaskNameEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TNATaskNameEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
