import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeEntryComponent } from './size-entry.component';

describe('SizeEntryComponent', () => {
  let component: SizeEntryComponent;
  let fixture: ComponentFixture<SizeEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
