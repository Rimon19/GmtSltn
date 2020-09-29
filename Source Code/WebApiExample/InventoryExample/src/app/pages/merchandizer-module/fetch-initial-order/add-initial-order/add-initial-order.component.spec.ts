import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInitialOrderComponent } from './add-initial-order.component';

describe('AddInitialOrderComponent', () => {
  let component: AddInitialOrderComponent;
  let fixture: ComponentFixture<AddInitialOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInitialOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInitialOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
