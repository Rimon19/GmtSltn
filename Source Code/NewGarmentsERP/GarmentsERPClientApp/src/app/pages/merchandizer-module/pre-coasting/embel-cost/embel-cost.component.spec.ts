import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbelCostComponent } from './embel-cost.component';

describe('EmbelCostComponent', () => {
  let component: EmbelCostComponent;
  let fixture: ComponentFixture<EmbelCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbelCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbelCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
