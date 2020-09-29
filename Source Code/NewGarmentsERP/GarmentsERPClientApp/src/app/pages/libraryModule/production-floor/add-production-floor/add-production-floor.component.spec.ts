import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductionFloorComponent } from './add-production-floor.component';

describe('AddProductionFloorComponent', () => {
  let component: AddProductionFloorComponent;
  let fixture: ComponentFixture<AddProductionFloorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductionFloorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductionFloorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
