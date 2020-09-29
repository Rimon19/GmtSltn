import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinancialParameterSetupComponent } from './add-financial-parameter-setup.component';

describe('AddFinancialParameterSetupComponent', () => {
  let component: AddFinancialParameterSetupComponent;
  let fixture: ComponentFixture<AddFinancialParameterSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFinancialParameterSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFinancialParameterSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
