import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CutandLayEntryComponent } from './cutand-lay-entry.component';

describe('CutandLayEntryComponent', () => {
  let component: CutandLayEntryComponent;
  let fixture: ComponentFixture<CutandLayEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutandLayEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CutandLayEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
