import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnittingChargeComponent } from './knitting-charge.component';

describe('KnittingChargeComponent', () => {
  let component: KnittingChargeComponent;
  let fixture: ComponentFixture<KnittingChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnittingChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnittingChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
