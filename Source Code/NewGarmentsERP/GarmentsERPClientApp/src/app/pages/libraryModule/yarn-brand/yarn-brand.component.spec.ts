import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YarnBrandComponent } from './yarn-brand.component';

describe('YarnBrandComponent', () => {
  let component: YarnBrandComponent;
  let fixture: ComponentFixture<YarnBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YarnBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YarnBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
