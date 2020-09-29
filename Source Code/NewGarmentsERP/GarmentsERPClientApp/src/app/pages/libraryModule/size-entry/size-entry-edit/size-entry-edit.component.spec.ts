import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeEntryEditComponent } from './size-entry-edit.component';

describe('SizeEntryEditComponent', () => {
  let component: SizeEntryEditComponent;
  let fixture: ComponentFixture<SizeEntryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeEntryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeEntryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
