import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyPartEntryComponent } from './body-part-entry.component';

describe('BodyPartEntryComponent', () => {
  let component: BodyPartEntryComponent;
  let fixture: ComponentFixture<BodyPartEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyPartEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyPartEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
