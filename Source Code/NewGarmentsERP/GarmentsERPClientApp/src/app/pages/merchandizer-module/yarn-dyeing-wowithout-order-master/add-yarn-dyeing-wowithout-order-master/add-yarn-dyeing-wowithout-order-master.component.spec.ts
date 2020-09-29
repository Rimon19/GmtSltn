import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYarnDyeingWOWithoutOrderMasterComponent } from './add-yarn-dyeing-wowithout-order-master.component';

describe('AddYarnDyeingWOWithoutOrderMasterComponent', () => {
  let component: AddYarnDyeingWOWithoutOrderMasterComponent;
  let fixture: ComponentFixture<AddYarnDyeingWOWithoutOrderMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYarnDyeingWOWithoutOrderMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYarnDyeingWOWithoutOrderMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
