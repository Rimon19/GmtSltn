import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionProfileComponent } from './division-profile.component';

describe('DivisionProfileComponent', () => {
  let component: DivisionProfileComponent;
  let fixture: ComponentFixture<DivisionProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
