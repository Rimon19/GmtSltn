import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationInqueryComponent } from './quotation-inquery.component';

describe('QuotationInqueryComponent', () => {
  let component: QuotationInqueryComponent;
  let fixture: ComponentFixture<QuotationInqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationInqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationInqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
