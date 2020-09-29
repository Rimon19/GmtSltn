import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDivisionProfilengComponent } from './edit-division-profileng.component';

describe('EditDivisionProfilengComponent', () => {
  let component: EditDivisionProfilengComponent;
  let fixture: ComponentFixture<EditDivisionProfilengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDivisionProfilengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDivisionProfilengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
