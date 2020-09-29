import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnRateComponent } from './yarn-rate.component';

describe('YarnRateComponent', () => {
  let component: YarnRateComponent;
  let fixture: ComponentFixture<YarnRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarnRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
