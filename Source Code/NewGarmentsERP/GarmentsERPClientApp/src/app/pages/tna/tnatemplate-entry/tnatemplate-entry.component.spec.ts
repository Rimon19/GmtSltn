import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TNATemplateEntryComponent } from './tnatemplate-entry.component';

describe('TNATemplateEntryComponent', () => {
  let component: TNATemplateEntryComponent;
  let fixture: ComponentFixture<TNATemplateEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TNATemplateEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TNATemplateEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
