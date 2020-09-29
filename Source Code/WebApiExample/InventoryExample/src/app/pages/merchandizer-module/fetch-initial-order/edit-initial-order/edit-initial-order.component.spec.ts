import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInitialOrderComponent } from './edit-initial-order.component';

describe('EditInitialOrderComponent', () => {
  let component: EditInitialOrderComponent;
  let fixture: ComponentFixture<EditInitialOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditInitialOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInitialOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
