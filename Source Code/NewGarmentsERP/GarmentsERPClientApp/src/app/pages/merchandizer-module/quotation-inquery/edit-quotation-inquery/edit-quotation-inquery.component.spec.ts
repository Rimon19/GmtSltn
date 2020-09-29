import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditQuotationInqueryComponent } from './edit-quotation-inquery.component';

describe('EditQuotationInqueryComponent', () => {
  let component: EditQuotationInqueryComponent;
  let fixture: ComponentFixture<EditQuotationInqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditQuotationInqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuotationInqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
