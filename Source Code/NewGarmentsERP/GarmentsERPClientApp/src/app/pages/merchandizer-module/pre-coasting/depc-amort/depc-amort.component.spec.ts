import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepcAmortComponent } from './depc-amort.component';

describe('DepcAmortComponent', () => {
  let component: DepcAmortComponent;
  let fixture: ComponentFixture<DepcAmortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepcAmortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepcAmortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
