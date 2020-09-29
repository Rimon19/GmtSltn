import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCountryLocationMappingComponent } from './add-country-location-mapping.component';

describe('AddCountryLocationMappingComponent', () => {
  let component: AddCountryLocationMappingComponent;
  let fixture: ComponentFixture<AddCountryLocationMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCountryLocationMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCountryLocationMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
