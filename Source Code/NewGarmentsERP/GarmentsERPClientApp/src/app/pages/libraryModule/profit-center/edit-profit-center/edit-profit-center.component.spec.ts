import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfitCenterComponent } from './edit-profit-center.component';

describe('EditProfitCenterComponent', () => {
  let component: EditProfitCenterComponent;
  let fixture: ComponentFixture<EditProfitCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfitCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfitCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
