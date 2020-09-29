import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDivisionProfilengComponent } from './add-division-profileng.component';

describe('AddDivisionProfilengComponent', () => {
  let component: AddDivisionProfilengComponent;
  let fixture: ComponentFixture<AddDivisionProfilengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDivisionProfilengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDivisionProfilengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
