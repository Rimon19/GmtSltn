import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfitCenterComponent } from './add-profit-center.component';

describe('AddProfitCenterComponent', () => {
  let component: AddProfitCenterComponent;
  let fixture: ComponentFixture<AddProfitCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfitCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfitCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
