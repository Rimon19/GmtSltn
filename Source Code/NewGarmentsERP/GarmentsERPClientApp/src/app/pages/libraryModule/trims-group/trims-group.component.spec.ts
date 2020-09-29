import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimsGroupComponent } from './trims-group.component';

describe('TrimsGroupComponent', () => {
  let component: TrimsGroupComponent;
  let fixture: ComponentFixture<TrimsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrimsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
