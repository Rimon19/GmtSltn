import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditYarnServiceWorkOrderComponent } from './edit-yarn-service-work-order.component';

describe('EditYarnServiceWorkOrderComponent', () => {
  let component: EditYarnServiceWorkOrderComponent;
  let fixture: ComponentFixture<EditYarnServiceWorkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditYarnServiceWorkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditYarnServiceWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
