import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFinancialParameterSetupComponent } from './edit-financial-parameter-setup.component';

describe('EditFinancialParameterSetupComponent', () => {
  let component: EditFinancialParameterSetupComponent;
  let fixture: ComponentFixture<EditFinancialParameterSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFinancialParameterSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFinancialParameterSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
