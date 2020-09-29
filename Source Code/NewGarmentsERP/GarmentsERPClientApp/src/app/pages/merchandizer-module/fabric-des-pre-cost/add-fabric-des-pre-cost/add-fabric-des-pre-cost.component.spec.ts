import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFabricDesPreCostComponent } from './add-fabric-des-pre-cost.component';

describe('AddFabricDesPreCostComponent', () => {
  let component: AddFabricDesPreCostComponent;
  let fixture: ComponentFixture<AddFabricDesPreCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFabricDesPreCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFabricDesPreCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
