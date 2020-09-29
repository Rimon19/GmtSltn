import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnDyeingWOWithoutOrderMasterComponent } from './yarn-dyeing-wowithout-order-master.component';

describe('YarnDyeingWOWithoutOrderMasterComponent', () => {
  let component: YarnDyeingWOWithoutOrderMasterComponent;
  let fixture: ComponentFixture<YarnDyeingWOWithoutOrderMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarnDyeingWOWithoutOrderMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnDyeingWOWithoutOrderMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
