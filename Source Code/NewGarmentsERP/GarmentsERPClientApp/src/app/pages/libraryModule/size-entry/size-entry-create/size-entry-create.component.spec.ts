import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizeEntryCreateComponent } from './size-entry-create.component';

describe('SizeEntryCreateComponent', () => {
  let component: SizeEntryCreateComponent;
  let fixture: ComponentFixture<SizeEntryCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizeEntryCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizeEntryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
