import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnDyeingWorkOrderComponent } from './yarn-dyeing-work-order.component';

describe('YarnDyeingWorkOrderComponent', () => {
  let component: YarnDyeingWorkOrderComponent;
  let fixture: ComponentFixture<YarnDyeingWorkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarnDyeingWorkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnDyeingWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
