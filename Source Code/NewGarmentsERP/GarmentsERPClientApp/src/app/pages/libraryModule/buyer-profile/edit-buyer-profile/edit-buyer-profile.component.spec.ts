import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBuyerProfileComponent } from './edit-buyer-profile.component';

describe('EditBuyerProfileComponent', () => {
  let component: EditBuyerProfileComponent;
  let fixture: ComponentFixture<EditBuyerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBuyerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBuyerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
