import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnCountEditComponent } from './yarn-count-edit.component';

describe('YarnCountEditComponent', () => {
  let component: YarnCountEditComponent;
  let fixture: ComponentFixture<YarnCountEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarnCountEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnCountEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
