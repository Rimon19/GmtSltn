import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKnittingChargeComponent } from './edit-knitting-charge.component';

describe('EditKnittingChargeComponent', () => {
  let component: EditKnittingChargeComponent;
  let fixture: ComponentFixture<EditKnittingChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKnittingChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKnittingChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
