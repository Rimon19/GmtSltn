import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYarnServiceWorkOrderComponent } from './add-yarn-service-work-order.component';

describe('AddYarnServiceWorkOrderComponent', () => {
  let component: AddYarnServiceWorkOrderComponent;
  let fixture: ComponentFixture<AddYarnServiceWorkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYarnServiceWorkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYarnServiceWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
