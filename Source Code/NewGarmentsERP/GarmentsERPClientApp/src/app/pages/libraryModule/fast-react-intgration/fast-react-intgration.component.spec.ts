import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastReactIntgrationComponent } from './fast-react-intgration.component';

describe('FastReactIntgrationComponent', () => {
  let component: FastReactIntgrationComponent;
  let fixture: ComponentFixture<FastReactIntgrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastReactIntgrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastReactIntgrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
