import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimsGroupEditComponent } from './trims-group-edit.component';

describe('TrimsGroupEditComponent', () => {
  let component: TrimsGroupEditComponent;
  let fixture: ComponentFixture<TrimsGroupEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrimsGroupEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimsGroupEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
