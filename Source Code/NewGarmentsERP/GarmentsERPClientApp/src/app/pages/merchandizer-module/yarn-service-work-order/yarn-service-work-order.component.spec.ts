import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnServiceWorkOrderComponent } from './yarn-service-work-order.component';

describe('YarnServiceWorkOrderComponent', () => {
  let component: YarnServiceWorkOrderComponent;
  let fixture: ComponentFixture<YarnServiceWorkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarnServiceWorkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnServiceWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
