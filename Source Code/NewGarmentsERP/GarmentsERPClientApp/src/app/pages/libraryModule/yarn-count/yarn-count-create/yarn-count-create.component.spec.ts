import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnCountCreateComponent } from './yarn-count-create.component';

describe('YarnCountCreateComponent', () => {
  let component: YarnCountCreateComponent;
  let fixture: ComponentFixture<YarnCountCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarnCountCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnCountCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
