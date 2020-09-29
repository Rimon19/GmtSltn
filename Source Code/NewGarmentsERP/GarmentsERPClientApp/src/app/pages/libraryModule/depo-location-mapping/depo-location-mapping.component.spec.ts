import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoLocationMappingComponent } from './depo-location-mapping.component';

describe('DepoLocationMappingComponent', () => {
  let component: DepoLocationMappingComponent;
  let fixture: ComponentFixture<DepoLocationMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepoLocationMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoLocationMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
