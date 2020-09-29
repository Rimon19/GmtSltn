import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBuyerWiesSeasonComponent } from './edit-buyer-wies-season.component';

describe('EditBuyerWiesSeasonComponent', () => {
  let component: EditBuyerWiesSeasonComponent;
  let fixture: ComponentFixture<EditBuyerWiesSeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBuyerWiesSeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBuyerWiesSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
