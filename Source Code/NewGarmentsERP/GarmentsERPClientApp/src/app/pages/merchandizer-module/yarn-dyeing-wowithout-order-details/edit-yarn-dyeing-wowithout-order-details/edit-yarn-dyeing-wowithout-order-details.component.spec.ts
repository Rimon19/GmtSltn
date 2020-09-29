import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditYarnDyeingWOWithoutOrderDetailsComponent } from './edit-yarn-dyeing-wowithout-order-details.component';

describe('EditYarnDyeingWOWithoutOrderDetailsComponent', () => {
  let component: EditYarnDyeingWOWithoutOrderDetailsComponent;
  let fixture: ComponentFixture<EditYarnDyeingWOWithoutOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditYarnDyeingWOWithoutOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditYarnDyeingWOWithoutOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
