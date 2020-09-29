import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsNdConditionCreateComponent } from './terms-nd-condition-create.component';

describe('TermsNdConditionCreateComponent', () => {
  let component: TermsNdConditionCreateComponent;
  let fixture: ComponentFixture<TermsNdConditionCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsNdConditionCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsNdConditionCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
