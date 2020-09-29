import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpricequotationComponent } from './addpricequotation.component';

describe('AddpricequotationComponent', () => {
  let component: AddpricequotationComponent;
  let fixture: ComponentFixture<AddpricequotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpricequotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpricequotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
