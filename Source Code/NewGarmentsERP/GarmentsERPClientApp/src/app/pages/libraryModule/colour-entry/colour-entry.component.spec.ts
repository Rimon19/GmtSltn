import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourEntryComponent } from './colour-entry.component';

describe('ColourEntryComponent', () => {
  let component: ColourEntryComponent;
  let fixture: ComponentFixture<ColourEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColourEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
