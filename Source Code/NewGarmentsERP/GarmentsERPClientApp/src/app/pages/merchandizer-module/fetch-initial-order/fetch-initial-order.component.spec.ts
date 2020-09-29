import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchInitialOrderComponent } from './fetch-initial-order.component';

describe('FetchInitialOrderComponent', () => {
  let component: FetchInitialOrderComponent;
  let fixture: ComponentFixture<FetchInitialOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchInitialOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchInitialOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
