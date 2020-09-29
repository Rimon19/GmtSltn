import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsNdConditionEditComponent } from './terms-nd-condition-edit.component';

describe('TermsNdConditionEditComponent', () => {
  let component: TermsNdConditionEditComponent;
  let fixture: ComponentFixture<TermsNdConditionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermsNdConditionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsNdConditionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
