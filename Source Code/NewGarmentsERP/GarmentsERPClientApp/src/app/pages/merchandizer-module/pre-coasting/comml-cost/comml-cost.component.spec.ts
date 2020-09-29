import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommlCostComponent } from './comml-cost.component';

describe('CommlCostComponent', () => {
  let component: CommlCostComponent;
  let fixture: ComponentFixture<CommlCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommlCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommlCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
