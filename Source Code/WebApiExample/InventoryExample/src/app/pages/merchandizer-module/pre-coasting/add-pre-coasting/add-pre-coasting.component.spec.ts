import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPreCoastingComponent } from './add-pre-coasting.component';

describe('AddPreCoastingComponent', () => {
  let component: AddPreCoastingComponent;
  let fixture: ComponentFixture<AddPreCoastingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPreCoastingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPreCoastingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
