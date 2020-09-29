import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnDyeingWODetailsComponent } from './yarn-dyeing-wodetails.component';

describe('YarnDyeingWODetailsComponent', () => {
  let component: YarnDyeingWODetailsComponent;
  let fixture: ComponentFixture<YarnDyeingWODetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarnDyeingWODetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnDyeingWODetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
