import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuyerProfileComponent } from './add-buyer-profile.component';

describe('AddBuyerProfileComponent', () => {
  let component: AddBuyerProfileComponent;
  let fixture: ComponentFixture<AddBuyerProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBuyerProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuyerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
