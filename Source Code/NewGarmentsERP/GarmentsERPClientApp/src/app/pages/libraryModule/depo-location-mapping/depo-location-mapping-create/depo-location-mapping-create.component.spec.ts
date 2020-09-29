import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoLocationMappingCreateComponent } from './depo-location-mapping-create.component';

describe('DepoLocationMappingCreateComponent', () => {
  let component: DepoLocationMappingCreateComponent;
  let fixture: ComponentFixture<DepoLocationMappingCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepoLocationMappingCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoLocationMappingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
