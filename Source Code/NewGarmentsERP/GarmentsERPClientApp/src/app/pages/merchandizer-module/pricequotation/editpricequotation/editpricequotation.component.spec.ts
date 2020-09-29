import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpricequotationComponent } from './editpricequotation.component';

describe('EditpricequotationComponent', () => {
  let component: EditpricequotationComponent;
  let fixture: ComponentFixture<EditpricequotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpricequotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpricequotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
