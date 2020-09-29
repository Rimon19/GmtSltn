import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnServiceWorkOrderDetailsComponent } from './yarn-service-work-order-details.component';

describe('YarnServiceWorkOrderDetailsComponent', () => {
  let component: YarnServiceWorkOrderDetailsComponent;
  let fixture: ComponentFixture<YarnServiceWorkOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarnServiceWorkOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnServiceWorkOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
