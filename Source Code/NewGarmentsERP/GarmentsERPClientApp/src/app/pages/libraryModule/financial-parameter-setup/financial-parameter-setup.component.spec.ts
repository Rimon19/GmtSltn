import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialParameterSetupComponent } from './financial-parameter-setup.component';

describe('FinancialParameterSetupComponent', () => {
  let component: FinancialParameterSetupComponent;
  let fixture: ComponentFixture<FinancialParameterSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialParameterSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialParameterSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
