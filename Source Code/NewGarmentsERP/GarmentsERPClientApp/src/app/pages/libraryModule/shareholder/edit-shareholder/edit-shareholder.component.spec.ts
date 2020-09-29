import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShareholderComponent } from './edit-shareholder.component';

describe('EditShareholderComponent', () => {
  let component: EditShareholderComponent;
  let fixture: ComponentFixture<EditShareholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShareholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShareholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
