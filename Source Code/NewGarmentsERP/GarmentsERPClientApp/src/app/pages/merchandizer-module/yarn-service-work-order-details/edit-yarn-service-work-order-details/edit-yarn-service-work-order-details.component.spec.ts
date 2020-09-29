import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditYarnServiceWorkOrderDetailsComponent } from './edit-yarn-service-work-order-details.component';

describe('EditYarnServiceWorkOrderDetailsComponent', () => {
  let component: EditYarnServiceWorkOrderDetailsComponent;
  let fixture: ComponentFixture<EditYarnServiceWorkOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditYarnServiceWorkOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditYarnServiceWorkOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
