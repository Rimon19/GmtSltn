import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryLocationMappingComponent } from './country-location-mapping.component';

describe('CountryLocationMappingComponent', () => {
  let component: CountryLocationMappingComponent;
  let fixture: ComponentFixture<CountryLocationMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryLocationMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryLocationMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
