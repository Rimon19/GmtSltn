import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricDesPreCostComponent } from './fabric-des-pre-cost.component';

describe('FabricDesPreCostComponent', () => {
  let component: FabricDesPreCostComponent;
  let fixture: ComponentFixture<FabricDesPreCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricDesPreCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricDesPreCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
