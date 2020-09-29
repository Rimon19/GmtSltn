import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuotationInqueryComponent } from './add-quotation-inquery.component';

describe('AddQuotationInqueryComponent', () => {
  let component: AddQuotationInqueryComponent;
  let fixture: ComponentFixture<AddQuotationInqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddQuotationInqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuotationInqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
