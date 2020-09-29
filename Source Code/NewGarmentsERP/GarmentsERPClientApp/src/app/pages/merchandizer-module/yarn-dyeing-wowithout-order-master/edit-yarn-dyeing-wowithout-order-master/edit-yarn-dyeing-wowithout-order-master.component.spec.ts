import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditYarnDyeingWOWithoutOrderMasterComponent } from './edit-yarn-dyeing-wowithout-order-master.component';

describe('EditYarnDyeingWOWithoutOrderMasterComponent', () => {
  let component: EditYarnDyeingWOWithoutOrderMasterComponent;
  let fixture: ComponentFixture<EditYarnDyeingWOWithoutOrderMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditYarnDyeingWOWithoutOrderMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditYarnDyeingWOWithoutOrderMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
