import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimsGroupCreateComponent } from './trims-group-create.component';

describe('TrimsGroupCreateComponent', () => {
  let component: TrimsGroupCreateComponent;
  let fixture: ComponentFixture<TrimsGroupCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrimsGroupCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimsGroupCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
