import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrimsCostComponent } from './trims-cost.component';

describe('TrimsCostComponent', () => {
  let component: TrimsCostComponent;
  let fixture: ComponentFixture<TrimsCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrimsCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrimsCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
