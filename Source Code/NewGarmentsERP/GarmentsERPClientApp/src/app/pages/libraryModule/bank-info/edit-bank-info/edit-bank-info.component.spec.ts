import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBankInfoComponent } from './edit-bank-info.component';

describe('EditBankInfoComponent', () => {
  let component: EditBankInfoComponent;
  let fixture: ComponentFixture<EditBankInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBankInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBankInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
