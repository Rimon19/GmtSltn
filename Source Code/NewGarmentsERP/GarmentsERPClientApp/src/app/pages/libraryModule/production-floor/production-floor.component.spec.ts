import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionFloorComponent } from './production-floor.component';

describe('ProductionFloorComponent', () => {
  let component: ProductionFloorComponent;
  let fixture: ComponentFixture<ProductionFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductionFloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
