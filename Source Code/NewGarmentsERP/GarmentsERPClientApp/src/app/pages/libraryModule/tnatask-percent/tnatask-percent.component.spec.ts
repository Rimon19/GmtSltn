import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TNATaskPercentComponent } from './tnatask-percent.component';

describe('TNATaskPercentComponent', () => {
  let component: TNATaskPercentComponent;
  let fixture: ComponentFixture<TNATaskPercentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TNATaskPercentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TNATaskPercentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
