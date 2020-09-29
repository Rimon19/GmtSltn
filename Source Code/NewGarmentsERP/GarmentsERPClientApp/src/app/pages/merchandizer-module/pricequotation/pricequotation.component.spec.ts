import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricequotationComponent } from './pricequotation.component';

describe('PricequotationComponent', () => {
  let component: PricequotationComponent;
  let fixture: ComponentFixture<PricequotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricequotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricequotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
