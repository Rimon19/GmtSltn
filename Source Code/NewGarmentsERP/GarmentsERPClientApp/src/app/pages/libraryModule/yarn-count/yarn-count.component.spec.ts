import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnCountComponent } from './yarn-count.component';

describe('YarnCountComponent', () => {
  let component: YarnCountComponent;
  let fixture: ComponentFixture<YarnCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarnCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
