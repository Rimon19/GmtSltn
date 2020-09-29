import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoLocationMappingEditComponent } from './depo-location-mapping-edit.component';

describe('DepoLocationMappingEditComponent', () => {
  let component: DepoLocationMappingEditComponent;
  let fixture: ComponentFixture<DepoLocationMappingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepoLocationMappingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoLocationMappingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
