import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFabricDesPreCostComponent } from './edit-fabric-des-pre-cost.component';

describe('EditFabricDesPreCostComponent', () => {
  let component: EditFabricDesPreCostComponent;
  let fixture: ComponentFixture<EditFabricDesPreCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFabricDesPreCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFabricDesPreCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
