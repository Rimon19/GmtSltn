import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TNATaskEntriesComponent } from './tnatask-entries.component';

describe('TNATaskEntriesComponent', () => {
  let component: TNATaskEntriesComponent;
  let fixture: ComponentFixture<TNATaskEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TNATaskEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TNATaskEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
