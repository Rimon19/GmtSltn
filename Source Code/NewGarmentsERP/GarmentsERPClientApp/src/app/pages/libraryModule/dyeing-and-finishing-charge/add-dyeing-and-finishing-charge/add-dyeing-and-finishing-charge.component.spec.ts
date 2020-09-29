import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDyeingAndFinishingChargeComponent } from './add-dyeing-and-finishing-charge.component';

describe('AddDyeingAndFinishingChargeComponent', () => {
  let component: AddDyeingAndFinishingChargeComponent;
  let fixture: ComponentFixture<AddDyeingAndFinishingChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDyeingAndFinishingChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDyeingAndFinishingChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
