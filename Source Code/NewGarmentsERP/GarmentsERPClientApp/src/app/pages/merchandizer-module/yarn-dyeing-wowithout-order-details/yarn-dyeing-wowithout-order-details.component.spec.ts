import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnDyeingWOWithoutOrderDetailsComponent } from './yarn-dyeing-wowithout-order-details.component';

describe('YarnDyeingWOWithoutOrderDetailsComponent', () => {
  let component: YarnDyeingWOWithoutOrderDetailsComponent;
  let fixture: ComponentFixture<YarnDyeingWOWithoutOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarnDyeingWOWithoutOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnDyeingWOWithoutOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
