import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInitialOrderComponent } from './show-initial-order.component';

describe('ShowInitialOrderComponent', () => {
  let component: ShowInitialOrderComponent;
  let fixture: ComponentFixture<ShowInitialOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowInitialOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInitialOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
