import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddYarnDyeingWOWithoutOrderDetailsComponent } from './add-yarn-dyeing-wowithout-order-details.component';

describe('AddYarnDyeingWOWithoutOrderDetailsComponent', () => {
  let component: AddYarnDyeingWOWithoutOrderDetailsComponent;
  let fixture: ComponentFixture<AddYarnDyeingWOWithoutOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddYarnDyeingWOWithoutOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddYarnDyeingWOWithoutOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
