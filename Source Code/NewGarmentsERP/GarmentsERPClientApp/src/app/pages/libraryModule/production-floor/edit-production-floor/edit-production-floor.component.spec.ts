import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductionFloorComponent } from './edit-production-floor.component';

describe('EditProductionFloorComponent', () => {
  let component: EditProductionFloorComponent;
  let fixture: ComponentFixture<EditProductionFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductionFloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductionFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
