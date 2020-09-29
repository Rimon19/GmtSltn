import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCountryLocationMappingComponent } from './edit-country-location-mapping.component';

describe('EditCountryLocationMappingComponent', () => {
  let component: EditCountryLocationMappingComponent;
  let fixture: ComponentFixture<EditCountryLocationMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCountryLocationMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCountryLocationMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
