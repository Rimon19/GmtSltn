import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddConversionCostComponent } from './add-conversion-cost.component';

describe('AddConversionCostComponent', () => {
  let component: AddConversionCostComponent;
  let fixture: ComponentFixture<AddConversionCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddConversionCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConversionCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
