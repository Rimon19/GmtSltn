import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerWiesSeasonComponent } from './buyer-wies-season.component';

describe('BuyerWiesSeasonComponent', () => {
  let component: BuyerWiesSeasonComponent;
  let fixture: ComponentFixture<BuyerWiesSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerWiesSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerWiesSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
