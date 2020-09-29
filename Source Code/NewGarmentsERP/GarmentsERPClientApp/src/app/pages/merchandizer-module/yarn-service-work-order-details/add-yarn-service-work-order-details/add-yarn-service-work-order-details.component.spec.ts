import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYarnServiceWorkOrderDetailsComponent } from './add-yarn-service-work-order-details.component';

describe('AddYarnServiceWorkOrderDetailsComponent', () => {
  let component: AddYarnServiceWorkOrderDetailsComponent;
  let fixture: ComponentFixture<AddYarnServiceWorkOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYarnServiceWorkOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYarnServiceWorkOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
