import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuyerWiesSeasonComponent } from './add-buyer-wies-season.component';

describe('AddBuyerWiesSeasonComponent', () => {
  let component: AddBuyerWiesSeasonComponent;
  let fixture: ComponentFixture<AddBuyerWiesSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBuyerWiesSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuyerWiesSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
