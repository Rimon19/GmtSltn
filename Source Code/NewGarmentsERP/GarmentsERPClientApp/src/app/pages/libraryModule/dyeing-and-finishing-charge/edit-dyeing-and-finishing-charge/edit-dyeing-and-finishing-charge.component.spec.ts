import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDyeingAndFinishingChargeComponent } from './edit-dyeing-and-finishing-charge.component';

describe('EditDyeingAndFinishingChargeComponent', () => {
  let component: EditDyeingAndFinishingChargeComponent;
  let fixture: ComponentFixture<EditDyeingAndFinishingChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDyeingAndFinishingChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDyeingAndFinishingChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
