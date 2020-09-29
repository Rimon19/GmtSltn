import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFabricCostComponent } from './add-fabric-cost.component';

describe('AddFabricCostComponent', () => {
  let component: AddFabricCostComponent;
  let fixture: ComponentFixture<AddFabricCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFabricCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFabricCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
