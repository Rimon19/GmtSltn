import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DyeingAndFinishingChargeComponent } from './dyeing-and-finishing-charge.component';

describe('DyeingAndFinishingChargeComponent', () => {
  let component: DyeingAndFinishingChargeComponent;
  let fixture: ComponentFixture<DyeingAndFinishingChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DyeingAndFinishingChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DyeingAndFinishingChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
