import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnCountDeterminationComponent } from './yarn-count-determination.component';

describe('YarnCountDeterminationComponent', () => {
  let component: YarnCountDeterminationComponent;
  let fixture: ComponentFixture<YarnCountDeterminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarnCountDeterminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnCountDeterminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
