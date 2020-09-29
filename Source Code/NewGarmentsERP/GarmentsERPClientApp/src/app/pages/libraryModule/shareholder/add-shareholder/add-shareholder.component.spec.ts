import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShareholderComponent } from './add-shareholder.component';

describe('AddShareholderComponent', () => {
  let component: AddShareholderComponent;
  let fixture: ComponentFixture<AddShareholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShareholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShareholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
