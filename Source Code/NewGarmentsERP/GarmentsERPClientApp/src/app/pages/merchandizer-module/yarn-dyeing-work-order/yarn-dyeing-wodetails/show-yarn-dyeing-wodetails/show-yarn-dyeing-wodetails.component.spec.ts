import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowYarnDyeingWODetailsComponent } from './show-yarn-dyeing-wodetails.component';

describe('ShowYarnDyeingWODetailsComponent', () => {
  let component: ShowYarnDyeingWODetailsComponent;
  let fixture: ComponentFixture<ShowYarnDyeingWODetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowYarnDyeingWODetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowYarnDyeingWODetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
