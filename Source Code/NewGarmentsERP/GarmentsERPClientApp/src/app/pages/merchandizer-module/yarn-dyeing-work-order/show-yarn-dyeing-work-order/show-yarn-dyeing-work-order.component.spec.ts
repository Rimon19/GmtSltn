import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowYarnDyeingWorkOrderComponent } from './show-yarn-dyeing-work-order.component';

describe('ShowYarnDyeingWorkOrderComponent', () => {
  let component: ShowYarnDyeingWorkOrderComponent;
  let fixture: ComponentFixture<ShowYarnDyeingWorkOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowYarnDyeingWorkOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowYarnDyeingWorkOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
